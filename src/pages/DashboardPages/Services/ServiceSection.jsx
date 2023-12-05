export default function ServiceSection() {
  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Service Section Seting</h3>
      </div>

      <form className="flex flex-col gap-3 p-4 md:w-1/2">
        <div>
          <p className="mb-1">Title</p>
          <input type="text" name="title" defaultValue="" required />
        </div>

        <div>
          <p className="mb-1">Description</p>
          <textarea
            name="description"
            rows="3"
            defaultValue=""
            required
          ></textarea>
        </div>

        <div>
          <button className="gradient-primary-btn">Update</button>
        </div>
      </form>
    </section>
  );
}
