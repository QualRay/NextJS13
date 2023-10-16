import React from "react";
import logo from "/public/vercel.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/Header.module.css"

export default function Header() {
  return (
    <>
      <div id="section_header">
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Background Circle Image"
              />
            </Link>
          </div>

          <ul className={styles.menuList}>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <Link href="/rewards">Rewards</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
