import React from "react";

export default function Main() {
  return (
    <div className="Main">
      {/*profile*/}
      <div className="Header">
        <div id="card">
          <img id="profile__img" src="image/profile__img.svg" alt="profile" />
          <img src="image/onchanges.png" class="img-top" alt="Card Front" />
        </div>
           <h2 id="twitter">Ellams George</h2>
           <h2 id="slack">Ellams</h2>
        <div class="tooltip">
          <img id="share" src="image/sharebtn.png" />
          <span class="tooltiptext">Share link</span>
        </div>

        <div>
          <img id="Avatar-logo" src="image/_Avatar share button (1).png" />
        </div>
      </div>
      {/*end of profile*/}

      {/*link section*/}
      <section>
        <a id="btn__zuri" target="_blank" href="https://twitter.com">
          Twitter Link
        </a>

        <a
          title="this is where you find books about design and coding"
          id="btn__zuri"
          target="_blank"
          href="https://training.zuri.team/"
        >
          Zuri Team
        </a>
        <a
          title="this is where you find books about design and coding"
          id="books"
          target="_blank"
          href=" http://books.zuri.team"
        >
          Zuri Books
        </a>
        <a
          title="this is where you find books about design and coding"
          id="book__python"
          target="_blank"
          href="https://books.zuri.team/python-for-beginners?ref_id=<ellams george>"
        >
          Phyton Books
        </a>
        <a
          title="this is where you get tested"
          id="pitch"
          target="_blank"
          href="https://background.zuri.team"
        >
          Background Check For Coders
        </a>
        <a
          title="this is where you find books about design and coding"
          id="book__design"
          target="_blank"
          href="https://books.zuri.team/design-rules "
        >
          Design Books
        </a>
      </section>
      {/*section logo*/}
      <div className="social-section">
        <div className="container">
          <img src="image/slack.png" />
          <img src="image/icon.svg" />
        </div>
      </div>
    </div>
  );
}
