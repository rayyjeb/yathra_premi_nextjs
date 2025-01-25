"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/ui/date-range";
import { InteractiveHoverButtonDemo } from "@/components/component/animatedButton";

const generateSelect = (
  id: string,
  label: string,
  options: number[],
  value: string,
  onChange: (value: string) => void
) => (
  <div className="flex flex-col space-y-1.5 w-full">
    <Label htmlFor={id}>{label}</Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Select">{value || "Select"}</SelectValue>
      </SelectTrigger>
      <SelectContent position="popper">
        {options.map((option) => (
          <SelectItem key={option} value={option.toString()}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export function CardWithForm() {
  const [name, setName] = React.useState("");
  const [guests, setGuests] = React.useState("");
  const [rooms, setRooms] = React.useState("");
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to?: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const handleSubmit = () => {
    const hotelName = "Blue Origin Farms";
    const place = "Galle, Sri Lanka";
    const checkIn = dateRange.from
      ? dateRange.from.toLocaleDateString("en-GB")
      : "Not Selected";
    const checkOut = dateRange.to
      ? dateRange.to.toLocaleDateString("en-GB")
      : "Not Selected";
    console.log("Form data before submission:");
    console.log("Name:", name);
    console.log("Guests:", guests);
    console.log("Rooms:", rooms);
    console.log(
      "Check-in Date:",
      dateRange.from
        ? dateRange.from.toLocaleDateString("en-GB")
        : "Not Selected"
    );
    console.log(
      "Check-out Date:",
      dateRange.to ? dateRange.to.toLocaleDateString("en-GB") : "Not Selected"
    );
    const message = `Hotel Name: ${hotelName}
Place: ${place}
Name: ${name}
Guests: ${guests}
Rooms: ${rooms}
Check in: ${checkIn}
Check out: ${checkOut}`;

    const phoneNumber = "9207948134"; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-4xl text-gray-900">$2999.0</CardTitle>
          <CardDescription className="text-xs">Exclusive of GST</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="grid w-full items-center gap-8">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex w-full justify-evenly gap-4">
              {generateSelect(
                "guests",
                "Guests",
                [1, 2, 3, 4],
                guests,
                setGuests
              )}
              {generateSelect("rooms", "Rooms", [1, 2, 3, 4], rooms, setRooms)}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Check In - Check Out">Check In - Check Out</Label>
              <DatePickerWithRange
                value={dateRange}
                onChange={(newRange) => {
                  setDateRange(newRange ?? { from: undefined, to: undefined });
                }}
              />
              <p className="text-[10px] italic font-extralight">
                We wont share your details without permission
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex w-full">
        <InteractiveHoverButtonDemo onClick={handleSubmit} />
      </CardFooter>
    </Card>
  );
}
