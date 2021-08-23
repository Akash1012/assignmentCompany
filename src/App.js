import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import Grid from "./components/layout/grid";

import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./components/layout/section";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`;

function App() {
  const [data, setData] = useState({ beers: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.punkapi.com/v2/beers?page=1&per_page=10"
      );

      console.log(result.data);

      setData({ beers: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <MainWrapper>
        <Header />
        <Section>
          <Hero />
        </Section>
        {!loading && (
          <>
            <section className="cards">
              {data.beers.map((item, index) => (
                <Grid
                  key={index.toString()}
                  id={item.id}
                  image={item.image_url}
                  title={item.name}
                  description={item.brewers_tips}
                />
              ))}
            </section>
          </>
        )}

        <Footer />
      </MainWrapper>
    </div>
  );
}

export default App;
