import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  description: string;
  name: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  // list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
