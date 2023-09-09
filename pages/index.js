import Link from 'next/link';
import styles from '@/styles/home/home.module.scss';
import { useEffect, useMemo, useState } from 'react';
import EditPannel from '@/components/EditPannel';
import TableSection from '@/components/TableSection';
import { getBoardList } from '@/data/boardApi';
import Head from 'next/head';

// index.js
export default function Home() {
    useEffect(() => {
        console.log(`getBoardList()`, getBoardList());
    }, []);

    return (
        <>
            <Head></Head>
            <div id={styles.home}>
                <div id={styles.header}>
                    <div id={styles.welcome}>Welcome To My World</div>
                    <div id={styles.description}>개발자 이경수의 지식창고 입니다.</div>
                </div>
                <div id={styles.body}>
                    <TableSection tableType="growth" />
                    <TableSection tableType="aboutme" />
                </div>
            </div>
        </>
    );
}
