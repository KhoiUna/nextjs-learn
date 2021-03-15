import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { useEffect, useRef, useState } from "react";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
