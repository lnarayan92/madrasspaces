const Awards = () => {
  const awards = [
    {
      title: "Design Competition: NIRMAAN",
      recognition: "Special Mention",
      year: "",
    },
  ];

  return (
    <section id="awards" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-12 tracking-tight">Awards</h2>
        
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 py-2">
              <h3 className="text-xl sm:text-2xl font-light mb-2">{award.title}</h3>
              <p className="text-lg text-muted-foreground font-light">{award.recognition}</p>
              {award.year && (
                <p className="text-sm text-muted-foreground font-light mt-1">{award.year}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
