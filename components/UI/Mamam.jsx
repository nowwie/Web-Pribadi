import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/mamam.module.css";
import PortfolioItem from "./mam";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Manis");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Manis") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Asin") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
           
            <h4 className="mt-4">Mam an kesukaan ku</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Manis" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Manis")}
              >
                Manis
              </button>
              <button
                className={`${
                  filter === "Asin" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Asin")}
              >
                Asin
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
