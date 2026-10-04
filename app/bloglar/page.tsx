type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );

  if (!response.ok) {
    throw new Error("Bloglar yüklənmədi.");
  }

  return response.json();
}

export default async function Bloglar() {
  const posts = await getPosts();

  return (
    <main className="inner-page">
      <section className="blog-hero">
        <span>BLOGLAR</span>

        <h1>
          Öyrənirəm.
          <br />
          <strong>Paylaşıram.</strong>
        </h1>

        <p>
          Server komponentindən istifadə edərək API-dən
          gətirilən nümunə blog yazıları.
        </p>
      </section>

      <section className="blog-grid">
        {posts.map((post) => (
          <article className="professional-blog-card" key={post.id}>
            <div className="blog-card-top">
              <span>0{post.id}</span>
              <span>ARTICLE</span>
            </div>

            <h2>{post.title}</h2>

            <p>{post.body}</p>

            <div className="read-more">
              Oxumağa davam et <span>→</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
