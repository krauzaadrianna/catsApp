export interface BreedDetails {
    name: string;
    id: string;
    origin: string;
    temperament: string;
    life_span: string;
    weight: Weight;
    wikipedia_url: string;
}

export interface Weight {
    metric: string;
}
