export type Member = {
  name: string;
  role?: "co-chair" | "member";
};

// Roster mirrored from
// https://www.trustandsafetyfoundation.org/tooling-research-committee
// Update here when membership changes.
export const coChairs: Member[] = [
  { name: "Joseph Seering", role: "co-chair" },
  { name: "Juliet Shen", role: "co-chair" },
];

export const members: Member[] = [
  { name: "Abhishek Shrivastava" },
  { name: "Arnika Singh" },
  { name: "Cameron Martel" },
  { name: "Claudia Flores-Saviaga" },
  { name: "Colin McCracken" },
  { name: "Cyndie Demeocq" },
  { name: "David Vinson" },
  { name: "Himanshu Panday" },
  { name: "Jason Radford" },
  { name: "Kalie Mayberry" },
  { name: "Neha Vijay Nair" },
  { name: "Oluwatooni Ajayi" },
  { name: "Paul Snyder" },
  { name: "Roya Pakzad" },
  { name: "Sally Lait" },
  { name: "Srik Gorthy" },
  { name: "Swapneel Mehta" },
];
