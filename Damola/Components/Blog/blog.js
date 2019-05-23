const blogs = document.querySelectorAll('.blog');
const blogData = [
    {
      topic: 'Mindo, Equador: The Complete Travel Guide',
      paragraph1: 'Mindo, Ecuador is a part of a cloud forest ecosystem,which is characterized by the persistent low0lying clouds that deliver lots of moisture and hence thick plant growth. Located along the lower slopes of the Pichincha Volcano, Mindos dense and misty forest canopy is full of life and particurlarly birds',
      paragraph2: 'Mindo is one ofthe premier birding destinations in the world! More than 500 different types of bird have been spotted in Mindo, In fact, Mindo regularly holds the annual world record for the most bird species counted within a 24-hour period',
    },
    {
      topic: '21 Fun Things To Do In Ho Chi Minh',
      paragraph1: 'There are many awesome and fun things to do in Ho Chi Minh City. A very huge city, the biggest in the country, with somany things to do.It can be overwhelming. Especially for those who may suffer temporary jetlag.',
      paragraph2: 'With more than8 million motorbikes and a minimum humidity tax of 60%, you might feel it difficult to go out of your hostel',
    },
    {
      topic: 'Niagara Falls',
      paragraph1: 'Niagara Falls, Ontario, is a Canadian city at the famous waterfalls of the same name, linked with the U.S. by the Rainbow Bridge. Its site on the Niagara Rivers western shore overlooks the Horseshoe Falls, the cascades most expansive section. Elevators take visitors to a lower, wetter vantage point behind the falls. A cliffside park features a promenade alongside 520-ft.-high Skylon Tower with an observation deck.',
      paragraph2: 'From the original falls going over the Niagara Escarpment, the water began to wear its way back up the river. ... There are actually two waterfalls in Niagara, the American Falls and the Canadian Horseshoe Falls. It is the combination of height and water flow that makes Niagara Falls so beautiful.',
    },
  ];
  

  class BlogGenerator {
      constructor(blog, data) {
          this.blog = blog;
          this.data = data;
          this.createBlog();
      }

      createBlog() {
          const topic = document.createElement('h3');
          topic.textContent = this.data.topic;
          this.blog.append(topic);

          const para1 = document.createElement('p');
          para1.textContent = this.data.paragraph1;
          this.blog.insertAdjacentElement('beforeend', para1);

          const para2 = document.createElement('p');
          para2.textContent = this.data.paragraph2;
          this.blog.insertAdjacentElement('beforeend', para2);
      }

    
  }

  blogs.forEach((blog,counter) => {
      new BlogGenerator(blog, blogData[counter]);
  })

  