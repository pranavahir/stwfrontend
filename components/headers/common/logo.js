import React, { Fragment } from "react";
import Link from "next/link";
import classes from "./logo.module.css";

const LogoImage = ({ logo }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        <a>
          <img
            src={`https://shoptheworldimage.digitechniq.in/logo/logo.png`}
            alt=""
            className={"img-fluid " + classes.headerLogoSize}
          />
        </a>
      </Link>
    </Fragment>
  );
};

export default LogoImage;
