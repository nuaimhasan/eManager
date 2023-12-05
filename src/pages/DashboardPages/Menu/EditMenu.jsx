export default function EditMenu() {
  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Edit Menu</h1>
      </div>

      <div className="bg-base-100 rounded mt-2 p-3">
        <form className="md:w-1/2">
          <div className="mt-4">
            <p className="mb-1">Name</p>
            <input type="text" name="name" />
          </div>

          <div className="mt-4">
            <p className="mb-1">Order</p>
            <input type="order" name="title" />
          </div>

          <div className="mt-5">
            <button type="submit" className="gradient-primary-btn">
              Update Menu
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
