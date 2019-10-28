import React from "react";
import renderer from "react-test-renderer";
import { Client } from "../src/client";

describe("Client", () => {
  test("should render", () => {
    // when
    const component = renderer.create(<Client />);

    // then
    expect(component.toJSON()).toMatchInlineSnapshot(`
      <div>
        <header
          className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
        >
          <div
            className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
          >
            <button
              className="MuiButtonBase-root MuiIconButton-root"
              disabled={false}
              onBlur={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              tabIndex={0}
              type="button"
            >
              <span
                className="MuiIconButton-label"
              >
                <svg
                  aria-hidden="true"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  />
                </svg>
              </span>
              <span
                className="MuiTouchRipple-root"
              />
            </button>
            <h6
              className="MuiTypography-root MuiTypography-h6"
            >
              NPPF Banquet
            </h6>
          </div>
        </header>
      </div>
    `);
  });
});
