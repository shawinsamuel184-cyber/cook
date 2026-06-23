import { describe, expect, it } from "vitest";
import { luxeImageUrl } from "@/utils/media";

describe("luxeImageUrl", () => {
  it("builds the expected url", () => {
    const url = luxeImageUrl('ocean "waves"', "landscape_16_9");
    expect(url).toContain("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=");
    expect(url).toContain("image_size=landscape_16_9");
    expect(url).toContain(encodeURIComponent('ocean "waves"'));
  });
});

