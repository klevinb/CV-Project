import React, { useState } from "react";
import { Image, FormControl, Button } from "react-bootstrap";
import { MdSearch } from "react-icons/md";

function NavBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    if (e.key === "Enter") onSearch(search);
  };

  return (
    <div className='nav-bar'>
      <Image src='/assets/youtube_logo.png' alt='youtube logo' />
      <div className='d-flex'>
        <FormControl
          type='text'
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          onKeyDown={handleSubmit}
          placeholder='Search'
          className='mr-sm-2'
        />
        <Button onClick={() => onSearch(search)}>
          <MdSearch />
        </Button>
      </div>
      <div>User info</div>
    </div>
  );
}

export default NavBar;
