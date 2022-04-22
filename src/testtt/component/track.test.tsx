import { render, screen, fireEvent } from "../testUtils";
import { singleTrack } from "../sample-data";
import Track from "../../component/Track";

describe("track test suite", () => {
  beforeEach(() => render(<Track track={singleTrack} />));

  it("should have image", () => {
    const image = screen.getByAltText(singleTrack.name);
    expect(image).toBeInTheDocument();
  });

  it("should have title", () => {
    const title = screen.getByText(singleTrack.name);
    expect(title).toBeInTheDocument();
  });

  it("should have artists", () => {
    const artists = screen.getByText(singleTrack.artists[0].name);
    expect(artists).toBeInTheDocument();
  });

  it("should have select button", () => {
    const select = screen.getByText("Select");
    expect(select).toBeInTheDocument();
  });

  it("should change the button text when selected", () => {
    const select = screen.getByText("Select");
    expect(select).toBeInTheDocument();

    fireEvent.click(select);
    expect(select.textContent).toBe("Deselect");

    fireEvent.click(select);
    expect(select.textContent).toBe("Select");
  });
});