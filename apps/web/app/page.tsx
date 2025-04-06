
export default async function Home() {
let ress=""
  fetch('http://localhost:8080/todos')
  .then(res => res.json())
  .then(data => ress = data)

  return (
    <>
    <div className="">
      {ress}
    </div>
    </>
  );
}
