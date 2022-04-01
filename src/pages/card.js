import React from "react";
import "../App.css";
import api from "../api";

function Card() {
  const [gitDatas, setGitDatas] = React.useState({});
  React.useEffect(() => {
    api.get("/jordancarmo").then((response) => {
      setGitDatas(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="box">
        <div className="inside-box">
          <div className="header">
            <div className="header-container">
              <img
                className="logo-header"
                src="/img/logo.svg"
                alt="logo-header"
              />
            </div>
            <h3> {gitDatas.login} </h3>
          </div>
          <div className="info-box">
            <img id="avatar" src={gitDatas.avatar_url} alt="avatar-img" />
            <div className="info-list">
              <img src="/img/followers.svg" alt="followers" />{" "}
              {gitDatas.followers} Seguidores
              <br />
              <img src="/img/followers.svg" alt="following" />{" "}
              {gitDatas.following} Seguindo
              <br />
              <img src="/img/repository.svg" alt="repository" />{" "}
              {gitDatas.public_repos} Repositórios
              <br />
              <img src="/img/company.svg" alt="company" /> Familyst Co.
              <br />
              <img src="/img/location.svg" alt="location" /> {gitDatas.location}
            </div>
          </div>
          <div className="footer">
            <img
              className="logo-footer"
              src="/img/logo.svg"
              alt="logo-footer"
            />
            <h3>ROCKETCARD</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;