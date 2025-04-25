"use client";
import Activities from "./Activities";
import AnalyticsOverview from "./AnalyticsOverview";
import ChannelsChart from "./ChannelsChart";
import IntegrationsHeader from "./IntegrationsHeader";
import OrderTable from "./OrderTable";
import SalesChart from "./SalesChart";

export default function Integrations() {
  return (
    <section className="bg-base-200 w-screen">
      <IntegrationsHeader />
      <AnalyticsOverview />
      <div className="flex gap-4 justify-center flex-wrap">
        <SalesChart />
        <ChannelsChart />
      </div>
      <div className="flex gap-4 justify-center mt-10 px-5 flex-wrap">
        <OrderTable />
        <Activities />
      </div>
    </section>
  );
}
