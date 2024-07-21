import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="mb-40">
      <p className="font-bold text-2xl pt-10 text-center">What Others Say</p>
      <div className="flex flex-col md:flex-row gap-1 items-center justify-center">
        <TestimonialsCard
          description="'TopTierWriters exceeded my expectations. The quality of work was
            outstanding.'"
          name="Isaac Mayodi"
          role="CEO , TopTierWriters ltd"
        />
        <TestimonialsCard
          description="'I am extremely satisfied with the timely delivery and
            professionalism.'"
          name="Janet Musimbi"
          role="Marketing Manager, USA"
        />
        <TestimonialsCard
          description="'The writers are truly experts in their field. Highly recommend!'"
          name="Fenwick Kipchumba"
          role="Founder , TopTierWriters ltd"
        />
      </div>
    </div>
  );
};

export default Testimonials;
