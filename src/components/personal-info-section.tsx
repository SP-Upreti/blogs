import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function PersonalInfoSection() {
  return (
    <section>
      <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-center">Type Your Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center text-sm mb-6">
            (Name, Occupation, Address, Social media links)
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input id="occupation" placeholder="Your occupation" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Your address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="social">Social Media Links</Label>
              <Input id="social" placeholder="Comma separated links" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}