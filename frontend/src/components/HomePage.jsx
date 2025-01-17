import { Typography, Box, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card1 from "./Card";
import KeyOffering from "./KeyOffering";
import "../Style.css";
import Usp from "./Usp";
import Footer from "./Footer";
import { getallcoffee } from "../api-helpers-axios/api-helpers.js";
export default function HomePage() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getallcoffee()
      .then((data) => setProduct(data.product))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "100vh" }}>
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://roasterycoffee.co.in/wp-content/uploads/2024/07/Roastery-Lucknow-8-scaled.jpg"
              className="d-block w-100"
              alt="alter"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://roasterycoffee.co.in/wp-content/uploads/2024/07/Roastery-Lucknow-1-scaled.jpg"
              className="d-block w-100"
              alt="alter"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://roasterycoffee.co.in/wp-content/uploads/2024/07/Roastery-Lucknow-5-scaled.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-5 mb-5 ms-5 me-5">
        <Typography
          variant="h3"
          align="center"
          marginBottom={4}
          fontFamily="serif"
          fontWeight={100}
          textTransform={"uppercase"}
        >
          Best Sellers
        </Typography>
        <Box sx={{ flexGrow: 1 }} display="block" marginBottom={4}>
          <Grid container spacing={2}>
            {products.slice(0, 4).map((item) => {
              return (
                <Card1
                  item={item}
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  desc={item.description}
                  price={item.price}
                  url={item.productUrl}
                />
              );
            })}
          </Grid>
        </Box>
      </div>

      <Typography
        variant="h3"
        align="center"
        marginBottom={4}
        fontFamily="serif"
        fontWeight={100}
        textTransform={"uppercase"}
        marginY={5}
      >
        Key Offerings
      </Typography>
      <Box sx={{ flexGrow: 1 }} display="block">
        <Grid container>
          <KeyOffering />
          <KeyOffering />
          <KeyOffering />
          <KeyOffering />
        </Grid>
      </Box>

      <div className=" mb-5 text-center mt-3">
        <Typography
          variant="h3"
          align="center"
          marginBottom={4}
          fontFamily="serif"
          fontWeight={100}
        >
          USPs
        </Typography>
        <div>
          <Grid container spacing={2} marginBottom={0}>
            <Usp
              src={
                "https://roasterycoffee.co.in/wp-content/uploads/2024/07/usp1-150x150.avif"
              }
              t1={"SPECIALITY COFFEE"}
              t2={"Speciality grade coffees that’s rated above 80+ on taste"}
            />
            <Usp
              src={
                "https://roasterycoffee.co.in/wp-content/uploads/2024/07/usp2.avif"
              }
              t1={"  ROASTED FRESH"}
              t2={"  Freshly roasted, direct from our roastery"}
            />
            <Usp
              src={
                "https://roasterycoffee.co.in/wp-content/uploads/2024/07/usp3.avif"
              }
              t1={"RESPONSIBLY SOURCED"}
              t2={" Organic and biodiverse coffee partners"}
            />
            <Usp
              src={
                "https://roasterycoffee.co.in/wp-content/uploads/2024/07/usp4.avif"
              }
              t1={" DELICIOUS TASTE"}
              t2={" Making great taste accessible"}
            />
          </Grid>
        </div>
      </div>
      {/* https://www.roasterycoffee.co.in/cdn/shop/files/kol-cafe003_675x400_crop_center.jpg?v=1638947457 */}
      <div>
        <Box className="ms-4 me-4 mb-5 ourCafeContainer">
          <img
            src="https://roasterycoffee.co.in/wp-content/uploads/2024/07/Roastery-Hyderbad-12-scaled.jpg"
            width="100%"
            alt=".."
            style={{ height: "50rem" }}
          />

          <div class="cafeContent text-center">
            <Typography
              variant="h1"
              fontSize={30}
              sx={{ color: "white", fontSize: "60px" }}
              fontFamily={"serif"}
              position="static"
              marginBottom={5}
            >
              OUR CAFE
            </Typography>
            <Typography variant="p" sx={{ color: "white" }}>
              Find Roastery coffee house near you to experience finest coffee
              selections, live roasting spaces and cafes that are designed to
              give calming coffee estate banglow experience.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Button
              size="large"
              sx={{ color: "white", display: "inline" }}
              color="nav"
              className="btnHover"
            >
              Shop Now
            </Button>
          </div>
        </Box>
      </div>

      <div className="text-center m-5">
        <Typography variant="h2" marginBottom={4}>
          OUR STORY
        </Typography>
        <Typography variant="p" marginBottom={3}>
          Founded in 2023 by Nidhi Tulsyan, Roastery coffee was created with one
          goal: to create great and consistent coffee, and share it with as many
          people as possible. our aim is to source and roast some the best
          coffees available. By paying premium prices we enable coffee farmers
          to create sustainable business. It is one of our principles to
          treasure the value chain from crop to cup. All our coffees are scoring
          86 points and more : they are fresh in season and roasted to
          perfection. As we have grown and changed over the years, we at
          roastery coffee found new ways to share flavour and connect
          communities across India.
        </Typography>
        <br />
        <br />

        <Button
          size="large"
          variant="outlined"
          className="readbtn"
          sx={{ backgroundColor: "black", color: "white" }}
        >
          READ MORE
        </Button>
      </div>

      <div className="subscribeImage mb-5 ">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStBhcn6Co_VFhv_kbq-6ahXNcg2n2Zs-ECnKfPo9bs9EPx230d"
          height={260}
          width="100%"
          alt=".."
        />
        <div className="sub">
          <Typography variant="h4" textTransform={"uppercase"}>
            SUBSCRIBE OUR NEWSLETTER
          </Typography>

          <Typography variant="p">
            Sign up for 10% off on your first order! Plus, get exclusive first
            access to new coffee launches.
          </Typography>
          <br />
          <br />

          <input
            type="email"
            style={{ height: "45px", width: "60%" }}
            placeholder="Enter Your email"
          />
          <Button
            size="large"
            className="subbtn"
            sx={{ backgroundColor: "#a35e0a", color: "white" }}
          >
            Subscribe
          </Button>
        </div>
      </div>

      <div className=" ms-3 me-3 p-3">
        <Footer />
      </div>
    </div>
  );
}
