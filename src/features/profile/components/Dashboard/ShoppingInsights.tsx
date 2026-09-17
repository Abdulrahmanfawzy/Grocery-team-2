import {
  
  CircleDollarSign,
  Star,
} from "lucide-react";
import arrowUp from "../../../../assets/Up-arrow.svg"
import InsightCard from "./InsightsCard";
import dollarIcon from "../../../../assets/dollar.svg"
import orderIcon from "../../../../assets/orderIcon.svg"



const insights = [
  {
    icon: dollarIcon,
    secondaryIcon: arrowUp,
    label: "Monthly Spend",
    value: "£342.18",
    description: "↑ 12% from last month",
  },
  {
    icon: orderIcon,
    label: "Orders This Month",
    value: "8",
    description: "Every ~3.7 days",
  },
  {
    icon: CircleDollarSign,
    label: "Total Savings",
    value: "£48.50",
    description: "Coupons & discounts",
  },
  {
    icon: Star,
    label: "Avg Order Value",
    value: "£42.77",
    description: "Based on 8 orders",
  },
];

const categories = [
  {
    name: "Fresh Produce",
    percentage: 65,
  },
  {
    name: "Dairy",
    percentage: 45,
  },
  {
    name: "Bakery",
    percentage: 38,
  },
  {
    name: "Snacks",
    percentage: 28,
  },
];

const ShoppingInsights = () => {
  return (
    <section className="w-full mt-4 rounded-[8px] border-[0.8px] border-[#D1D5DC] bg-white py-6 px-6">
      {/* Title */}
      <h2 className="mb-3 text-[20px] font-medium text-app-main leading-[150%]">
        Your Shopping Insights
      </h2>

      {/* Insight Cards */}
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

      {/* Categories */}
      <div className="mt-4">
        <h3 className="mb-2 text-[10px] font-semibold text-gray-300">
          
        </h3>

        <div className="space-y-1.5 rounded-lg bg-[#F8FBFD] px-3 py-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center gap-2"
            >
              {/* Progress Bar */}
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

              {/* Category Name */}
              <span className=" text-[16px] text-[#014162]">
                {category.name}
              </span>

              {/* Percentage */}
              <span className=" text-[16px] font-medium text-[#014162]">
                ({category.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoppingInsights;