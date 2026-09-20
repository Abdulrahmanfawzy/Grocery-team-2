import {
  CircleDollarSign,
  Star,
} from "lucide-react";
import arrowUp from "../../../../assets/Up-arrow.svg"
import InsightCard from "./InsightsCard";
import dollarIcon from "../../../../assets/dollar.svg"
import orderIcon from "../../../../assets/orderIcon.svg"
import type { DashboardData } from "../../types/dashboard.types";

interface IProps {
  data?: DashboardData;
}

const ShoppingInsights = ({ data }: IProps) => {
  const spendPercentage = data?.monthly_spend.percentage ?? 0;

  const insights = [
    {
      icon: dollarIcon,
      secondaryIcon: spendPercentage > 0 ? arrowUp : undefined,
      label: "Monthly Spend",
      value: `£${data?.monthly_spend.monthly_spend?.toFixed(2) ?? '0.00'}`,
      description: spendPercentage > 0 ? `↑ ${spendPercentage}% from last month` : "No spend this month",
    },
    {
      icon: orderIcon,
      label: "Orders This Month",
      value: `${data?.monthly_orders.orders_count ?? 0}`,
      description: data?.monthly_orders.average_days_between_orders
        ? `Every ~${data.monthly_orders.average_days_between_orders} days`
        : "No orders yet",
    },
    {
      icon: CircleDollarSign,
      label: "Total Savings",
      value: `£${data?.total_saving?.toFixed(2) ?? '0.00'}`,
      description: "Coupons & discounts",
    },
    {
      icon: Star,
      label: "Avg Order Value",
      value: `£${data?.average_order_value?.toFixed(2) ?? '0.00'}`,
      description: `Based on ${data?.monthly_orders.orders_count ?? 0} orders`,
    },
  ];

  const categories = data?.category_purchase_percentage.map((cat) => ({
    name: cat.category,
    percentage: cat.percentage,
  })) ?? [];

  return (
    <section className="mt-4 w-full rounded-[8px] border-[0.8px] border-[#D1D5DC] bg-white px-4 py-5 sm:px-6 sm:py-6">
      <h2 className="mb-3 text-[20px] font-medium text-app-main leading-[150%]">
        Your Shopping Insights
      </h2>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {insights.map((insight) => (
          <InsightCard
            key={insight.label}
            icon={insight.icon}
            secondaryIcon={insight.secondaryIcon}
            label={insight.label}
            value={insight.value}
            description={insight.description}
          />
        ))}
      </div>

      {categories.length > 0 && (
        <div className="mt-4">
          <h3 className="mb-2 text-[10px] font-semibold text-gray-300">
            Category Breakdown
          </h3>

          <div className="space-y-1.5 rounded-lg bg-[#F8FBFD] px-3 py-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex min-w-0 items-center gap-2"
              >
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#D9DEE2]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${category.percentage}%`,
                      backgroundImage:
                        "linear-gradient(90deg, #F7FCFF 0%, #9AB5C3 37.98%, #47768F 71.63%, #014162 100%)",
                    }}
                  />
                </div>

                <span className="w-20 shrink-0 truncate text-[12px] text-[#014162] sm:w-28 sm:text-[16px]">
                  {category.name}
                </span>

                <span className="w-16 shrink-0 text-right text-[12px] font-medium text-[#014162] sm:w-20 sm:text-[16px]">
                  ({category.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ShoppingInsights;
