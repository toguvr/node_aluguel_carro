class Category {
  id?: string;
  name: string;
  description: string;
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = "1";
    }
  }
}

export { Category };
