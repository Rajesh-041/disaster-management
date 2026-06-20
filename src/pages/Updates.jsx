import { updates } from "../data/updates";
import UpdateList from "../components/updates/UpdateList";

export default function Updates() {
  return (
    <main className="space-y-8">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
          Latest Updates
        </h2>
        <p className="text-text-muted text-sm">
          Stay informed with the latest disaster-related developments
        </p>
      </div>
      <UpdateList updates={updates} />
    </main>
  );
}
