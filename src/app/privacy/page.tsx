export const metadata = {
  title: "Privacy - Noisefill",
  description: "A super simple chart that explains how we use your data.",
};

export default function Tos() {
  return (
    <div className="w-full max-w-full mx-auto py-12 px-8">
      <h1 className="text-2xl font-bold">Privacy policy</h1>
      <p className="text-sm text-muted-foreground pt-1 font-medium">
        A super simple privacy policy that explains how we use your data.
      </p>
      <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-md mt-2">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Purpose
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Description
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Types of Data Collected
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              How Data is Processed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Accounts */}
          <tr>
            <td className="px-4 py-2 font-semibold">Accounts</td>
            <td className="px-4 py-2">
              Users can sign up for an account with their email, or with Google,
              Github, Discord, or Figma. Available only in the US for now.
            </td>
            <td className="px-4 py-2">
              Email, name, OAuth tokens, and other basic auth-related metadata
            </td>
            <td className="px-4 py-2">
              We store account information in a database hosted on Neon. The
              authentication library we host uses cookies to implement basic
              functionality and to protect against CSRF attacks.
              <br />
              <br />
              If you choose to sign in with another service like Google or
              GitHub, that service will provide certain data to us, and is
              subject to their privacy policy. If you choose to sign in with an
              email, we will use Loops to send you a magic link to sign in.
            </td>
          </tr>

          {/* Hosting */}
          <tr>
            <td className="px-4 py-2 font-semibold">Hosting</td>
            <td className="px-4 py-2">
              We host our website on Vercel which we also use to route traffic
              to different services like our database, search provider, and
              analytics.
            </td>
            <td className="px-4 py-2">
              IP addresses, device metadata, request headers
            </td>
            <td className="px-4 py-2">
              Collected and processed by Vercel for security, performance, and
              infrastructure purposes. Data is subject to Vercel's privacy
              policy.
            </td>
          </tr>

          {/* Analytics & Monitoring */}
          <tr>
            <td className="px-4 py-2 font-semibold">Analytics & Monitoring</td>
            <td className="px-4 py-2">
              Usage tracking and monitoring via PostHog.
            </td>
            <td className="px-4 py-2">
              Basic web analytics (page views, visitor counts, etc.),
              performance data, error logging, interactions, session replays,
              experiments to test new features, and other uses.
            </td>
            <td className="px-4 py-2">
              Collected and processed by PostHog for insights and product
              improvement/development.
              <br />
              <br />
              We make efforts to anonymize data, including by configuring
              PostHog to not store the last two octets of the IP address. Data
              is subject to PostHog's privacy policy.
            </td>
          </tr>

          {/* Featurebase */}
          <tr>
            <td className="px-4 py-2 font-semibold">Featurebase</td>
            <td className="px-4 py-2">
              We use Featurebase to enable a widget which allows you to give
              feedback, get support, and see our latest updates.
            </td>
            <td className="px-4 py-2">
              (potentially) IP address, device metadata, request headers
            </td>
            <td className="px-4 py-2">
              Featurebase's SDK is loaded on the page and is subject to their
              privacy policy. Due to how networking works, your IP address
              and/or other device metadata may be collected.
            </td>
          </tr>

          {/* Audio storage */}
          <tr>
            <td className="px-4 py-2 font-semibold">Audio Storage</td>
            <td className="px-4 py-2">
              We use Cloudflare R2 to store audio files.
            </td>
            <td className="px-4 py-2">
              IP address, device metadata, request headers
            </td>
            <td className="px-4 py-2">
              Cloudflare R2 is subject to Cloudflare's privacy policy.
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p className="text-sm text-muted-foreground">
        To exercise your privacy rights in certain countries (right of access,
        right to be forgotten, etc.) please contact us at{" "}
        <a href="mailto:hi@noisefill.com" className="text-blue-500">
          hi@noisefill.com
        </a>{" "}
        and we will try to do what we can ourselves. In some cases, you may need
        to contact our third party providers directly.
      </p>
    </div>
  );
}
