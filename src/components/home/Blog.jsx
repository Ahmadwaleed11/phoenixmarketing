import React from "react";

const blogs = [
  {
    id: 1,
    day: "20",
    month: "May",
    title: "10 Social Media Tips to Boost Engagement",
    category: "Marketing",
    image: "src/components/home/10-social-media-tips-to-boost-engagement.jpg.jpeg",
  },
  {
    id: 2,
    day: "22",
    month: "May",
    title: "SEO Strategies That Actually Work in 2024",
    category: "SEO",
    image: "src/components/home/seo-strategies-that-actually-work.jpg.jpeg",
  },
  {
    id: 3,
    day: "28",
    month: "May",
    title: "How Paid Ads Can Grow Your Business",
    category: "Advertising",
    image: "src/components/home/how-paid-ads-can-grow-your-business (2).jpg.jpeg",
  },
  {
    id: 4,
    day: "05",
    month: "June",
    title: "Content Marketing Trends to Follow",
    category: "Marketing",
    image: "src/components/home/content-marketing-trends-to-follow.jpg.jpeg",
  },
  {
    id: 5,
    day: "28",
    month: "May",
    title: "How Paid Ads Can Grow Your Business",
    category: "Advertising",
    image: "src/components/home/how-paid-ads-can-grow-your-business.jpg.jpeg",
  },
];

function Blog() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-medium tracking-[0.2em] text-gray-500">
            LATEST BLOGS
          </span>
          <br />
          <h2 className="relative mt-1 inline-block text-3xl font-bold text-gray-900">
            Insights & Tips
            <span className="absolute -bottom-2 left-0 h-[3px] w-55 bg-[var(--button-color)]"></span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-[var(--button-color)]/30"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                {/* Date Badge with pulse */}
                <div className="absolute left-3 top-3 z-10 flex h-12 w-12 flex-col items-center justify-center rounded bg-[var(--button-color)] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-lg font-bold leading-none">{blog.day}</span>
                  <span className="text-xs font-medium uppercase">{blog.month}</span>
                </div>
                
                {/* Image with zoom effect */}
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="bg-gray-50 p-4 transition-colors duration-300 group-hover:bg-white">
                <h3 className="mb-2 line-clamp-2 text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-[var(--button-color)]">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{blog.category}</p>
                
                {/* Read more link appears on hover */}
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-3 transition-all duration-300">
                  <span className="text-xs font-semibold text-[var(--button-color)] inline-flex items-center gap-1">
                    Read More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;