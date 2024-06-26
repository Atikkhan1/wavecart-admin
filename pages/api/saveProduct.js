import Product from "@/models/productSchema";
const mongoose = require('mongoose');

const puppeteer = require("puppeteer");

export default async function handler(req, res) {

  let targetLink = req.query.link;
  let targetCategory = req.query.category;



  let auto = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(targetLink);

    let data = await page.evaluate(() => {
      let name =
        document.getElementsByClassName("sc-eDvSVe fhfLdV")[0].innerText;
      let priceGet =
        document.getElementsByClassName("sc-eDvSVe biMVPh")[0].innerText;
      let price = Number(priceGet.replace("₹", ""));

      let link = document.baseURI;
      let image = document.getElementsByClassName(
        "ProductDesktopImage__ImageWrapperDesktop-sc-8sgxcr-0 iEMJCd"
      )[0].childNodes[0].src;

      let descQuery = document.getElementsByClassName(
        "sc-eDvSVe guezwa pre pre"
      );
      let desc = "";
      for (let i = 0; i < descQuery.length; i++) {
        desc = desc + descQuery[i].innerHTML;
        
      }

      return { name, price, link, image, desc };
    });
    data.category = targetCategory;
    console.log(data);

    await mongoose.connect(process.env.MONGO_URI,{
      
    })

    let new_user = Product.create({
        name:data.name,
        image:data.image,
        price:data.price,
        description:data.desc,
        link:data.link,
        category:data.category
    })

    res.status(200).json(data);
    await browser.close();
  };

  
  auto();
}
