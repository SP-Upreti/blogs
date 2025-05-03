import { DollarSign } from 'lucide-react';
import { Card, CardContent,  CardHeader, CardTitle } from '@/components/ui/card';

export default function MonetizationSection() {
  return (
    <section>
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-teal-500 text-white px-3 py-1 rounded-md mb-2">
          <DollarSign className="w-5 h-5 mr-2" />
          <span className="font-medium">How Can You Earn</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">By Writing On Medium</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-center">By Ad Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-center">By Affiliate Programme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}