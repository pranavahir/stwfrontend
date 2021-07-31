import React, { Fragment } from "react";
import Link from "next/link";
import classes from "./logo.module.css";

const LogoImage = ({ logo }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        <a>
          <img
            src={`/assets/images/icon/${logo ? logo : "logo.png"}`}
            alt=""
            className={"img-fluid " + classes.headerLogoSize}
          />
        </a>
      </Link>
    </Fragment>
  );
};

export default LogoImage;
