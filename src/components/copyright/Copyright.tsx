const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-divider text-background-1">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-2">
        <p className="text-xs">© {year} Noam Moskowitz. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Copyright;
