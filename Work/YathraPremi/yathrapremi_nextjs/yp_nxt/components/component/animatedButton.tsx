import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function InteractiveHoverButtonDemo({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <InteractiveHoverButton
      onClick={onClick}
      className="w-full flex items-center"
    >
      Check Availability
    </InteractiveHoverButton>
  );
}
