import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  description: string;
  name: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
