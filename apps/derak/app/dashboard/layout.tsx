import React from 'react';
import { auth } from '../../auth';
import { redirect } from 'next/navigation';

import styles from "./dashboard.module.scss";

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  if (!session?.user) return redirect("/")

  return (
    <section className={styles.dashboardLayout}>
      {children}
    </section>
  )
}
