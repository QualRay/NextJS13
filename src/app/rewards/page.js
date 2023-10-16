'use client';
import React, { useState } from "react";
import { Rating } from "primereact/rating";
import styles from '@/app/styles/Rewards.module.css'

export default function page() {
  const [value, setValue] = useState(null);

  return (
    <>

    <section>
        Rewards Page
        <div className="card flex justify-content-center p-4">
            <Rating value={value} onChange={(e) => setValue(e.value)} />
        </div>
    </section>

    </>
  );
}
