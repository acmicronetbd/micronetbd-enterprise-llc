import { aiSolutions } from "@/data/services";
import {
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineCog6Tooth,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const features = [
  {
    title: "Einstein AI Specialists",
    description:
      "Experts in Einstein Analytics, Einstein Bots, Einstein Prediction Builder, and Einstein Discovery for intelligent automation.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Agentforce Development",
    description:
      "Build autonomous AI agents that handle complex customer interactions, automate workflows, and drive productivity.",
    icon: HiOutlineCpuChip,
  },
  {
    title: "AI Integration & Automation",
    description:
      "Connect Salesforce with OpenAI, Claude, and other LLMs to create smart workflows and generative AI experiences.",
    icon: HiOutlineCog6Tooth,
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage machine learning models to forecast sales, predict churn, and optimize customer journeys.",
    icon: HiOutlineChartBar,
  },
];

const capabilities = [
  "Einstein GPT and generative AI implementation",
  "Custom AI model training and deployment on Salesforce",
  "Intelligent chatbots and virtual assistants",
  "AI-driven lead scoring and opportunity insights",
  "Natural language processing for case management",
  "Automated data enrichment and cleansing",
];

export default function AISolutions() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            {aiSolutions.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            {aiSolutions.body}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="mt-14 bg-gray-50 rounded-xl border border-gray-100 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            AI Capabilities We Staff For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((capability) => (
              <div key={capability} className="flex items-start gap-3">
                <HiOutlineCheckCircle className="shrink-0 w-6 h-6 text-[#1BA0DA] mt-0.5" />
                <span className="text-gray-700">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
