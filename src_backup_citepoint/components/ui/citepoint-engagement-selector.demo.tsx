import CitepointEngagementSelector from "./citepoint-engagement-selector";

export default function CitepointEngagementSelectorDemo() {
  return (
    <div className="min-h-screen bg-[#012624] py-16 px-4 sm:px-6 lg:px-8">
      <CitepointEngagementSelector
        defaultSelected="foundation"
        onEngagementChange={(engagement) => {
          console.log("Selected engagement:", engagement.name);
        }}
        showDisclosure={true}
      />
    </div>
  );
}
