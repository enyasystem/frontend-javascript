export interface MajorCredits {
  credits: number;
  // brand to make this a nominal type
  brand: 'major';
}

export interface MinorCredits {
  credits: number;
  // brand to make this a nominal type
  brand: 'minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'major' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'minor' };
}
