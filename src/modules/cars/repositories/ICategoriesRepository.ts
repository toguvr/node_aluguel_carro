import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  description: string;
  name: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO);
}

export { ICategoriesRepository, ICreateCategoryDTO };
