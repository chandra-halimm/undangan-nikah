export class GenericServices {
  constructor(model) {
    this.model = model;
    this.item = null;
  }

  async create(data) {
    try {
      this.item = await this.model.create(data);
      return this.item;
    } catch (error) {
      throw new Error(`Error : ${error.message}`);
    }
  }

  async getData() {
    try {
      this.item = await this.model.findAll();
    } catch (error) {
      throw new Error(`Error : ${error.message}`);
    }
  }

  async getId(id) {
    try {
      this.item = await this.model.findByPk(id);
      return this.item;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      this.item = await this.model.destroy(id);
      return this.item;
    } catch (error) {
      throw new Error(`Error : ${error.message}`);
    }
  }

  async update(data, id) {
    try {
      this.item = await this.model.update(data, {
        where: { id: id },
      });
      if (updatedRows === 0) throw new Error("Item not found or not updated");
      return this.item;
    } catch (error) {
      throw new Error(`Error : ${error.message}`);
    }
  }
}
