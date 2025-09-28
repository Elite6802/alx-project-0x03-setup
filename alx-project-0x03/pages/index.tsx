import Button from "@/components/common/Button";
import Layout from "@/components/layouts/Layout";
// Define PageRouteProps interface locally
interface PageRouteProps {
  pageRoute: string;
}
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()

  // Imperative routing with useRouter
  const routeToNextPage  = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false})
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-100px)] bg-gray-100 flex flex-col justify-center items-center text-center py-20">
        {/* Welcome Message */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Splash App!
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-xl">
          Your one-stop platform for everything AI you need. Start exploring by
          navigating to our features below.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Generate Text" buttonSize="md" buttonBackgroundColor="blue" />
          <Button action={() => routeToNextPage({ pageRoute: '/text-to-image'})} buttonLabel="Text to Image" buttonSize="md" buttonBackgroundColor="green" />
          <Button action={() => routeToNextPage({ pageRoute: '/counter-app'})} buttonLabel="Contact us" buttonSize="md" buttonBackgroundColor="orange" />
        </div>
      </div>
    </Layout>
  );
}
