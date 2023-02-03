export interface Slot {
  id: string;
  setId: number;
  slotIndex: number;
  seedId: number;
  prereqType: string;
  prereqId: number;
  prereqPlacement?: any;
  entrantId: number;
}