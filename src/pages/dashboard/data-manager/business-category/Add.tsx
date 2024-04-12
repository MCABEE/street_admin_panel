import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AddBusinessCategory() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 mt-10">
      <Input placeholder="Category Name" />
      <Textarea placeholder="Keywords" />
      <Button variant={"primary"}>Save</Button>
    </form>
  );
}
