import svgPaths from "./svg-1388mbtw89";
import imgFrame1686554505 from "figma:asset/e09d5e8b9c8395d2b34c6222f4461602662a89fc.png";
import imgImage4 from "figma:asset/fa31b814ae061f7f88b2c95253baa68381467e7b.png";

function MaterialSymbolsArrowBackRounded() {
  return (
    <div
      className="absolute left-1/2 size-7 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="material-symbols:arrow-back-rounded"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="material-symbols:arrow-back-rounded">
          <path d={svgPaths.p37985c80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686556993() {
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-lg shrink-0 size-10">
      <MaterialSymbolsArrowBackRounded />
    </div>
  );
}

function Frame1686557047() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Program Configuration Details</p>
      </div>
    </div>
  );
}

function Frame1686557001() {
  return (
    <div className="h-10 relative rounded-xl shrink-0 w-full">
      <div className="h-10 overflow-clip relative w-full">
        <div className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-4 not-italic text-[#b3b3b3] text-[16px] text-left text-nowrap top-2">
          <p className="block leading-[1.5] whitespace-pre">Choose an option</p>
        </div>
        <div
          className="absolute h-[4.14px] right-[19.76px] translate-y-[-50%] w-[9.24px]"
          data-name="Vector"
          style={{ top: "calc(50% + 0.07px)" }}
        >
          <div className="absolute inset-[-14.49%_-6.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
              <path
                d={svgPaths.p170e12c8}
                id="Vector"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}

function Frame1686557002() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-left w-full">
        <p className="block leading-[1.5]">Corporate</p>
      </div>
      <Frame1686557001 />
    </div>
  );
}

function Frame1686557004() {
  return (
    <div className="h-10 relative rounded-xl shrink-0 w-full">
      <div className="h-10 overflow-clip relative w-full">
        <div className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-4 not-italic text-[#b3b3b3] text-[16px] text-left text-nowrap top-2">
          <p className="block leading-[1.5] whitespace-pre">Select User Type</p>
        </div>
        <div
          className="absolute h-[4.14px] right-[19.76px] translate-y-[-50%] w-[9.24px]"
          data-name="Vector"
          style={{ top: "calc(50% + 0.07px)" }}
        >
          <div className="absolute inset-[-14.49%_-6.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
              <path
                d={svgPaths.p170e12c8}
                id="Vector"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}

function Frame1686557048() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-left w-full">
        <p className="block leading-[1.5]">User Type</p>
      </div>
      <Frame1686557004 />
    </div>
  );
}

function Frame1686557003() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-[30px] p-0 top-5 w-[1470px]">
      <Frame1686557047 />
      <Frame1686557002 />
      <Frame1686557048 />
    </div>
  );
}

function RoundedRectangle() {
  return (
    <div
      className="h-[220px] relative rounded-2xl shadow-[0px_1px_12px_0px_rgba(4,63,80,0.05)] shrink-0 w-full"
      data-name="Rounded Rectangle"
    >
      <div className="absolute bg-zinc-100 inset-0 pointer-events-none rounded-2xl" data-name="Rounded Rectangle">
        <div aria-hidden="true" className="absolute border border-[#ffffff] border-solid inset-0 rounded-2xl" />
        <div className="absolute inset-0 shadow-[0px_4px_12px_0px_inset_rgba(255,255,255,0.75)]" />
      </div>
      <Frame1686557003 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_6px_0px_inset_rgba(255,255,255,0.5)]" />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="4"
    >
      <RoundedRectangle />
    </div>
  );
}

function Frame1686557044() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-[30px] p-0 top-6 w-[1530px]">
      <Frame1686556993 />
      <Component4 />
    </div>
  );
}

function IconParkOutlineAdd() {
  return <div className="absolute left-[783px] size-6 top-[346px]" data-name="icon-park-outline:add" />;
}

function Group1686551166() {
  return (
    <div className="absolute contents left-[783px] top-[346px]">
      <IconParkOutlineAdd />
    </div>
  );
}

function Group1686551185() {
  return (
    <div className="absolute contents left-[783px] top-[308px]">
      <Group1686551166 />
    </div>
  );
}

function MaterialSymbolsLightCardMembershipOutline() {
  return (
    <div
      className="absolute left-1/2 size-6 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="material-symbols-light:card-membership-outline"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:card-membership-outline">
          <path d={svgPaths.p12065a00} fill="var(--fill-0, #043F50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686557046() {
  return (
    <div className="bg-[#ccdbdf] overflow-clip relative rounded shrink-0 size-7">
      <MaterialSymbolsLightCardMembershipOutline />
    </div>
  );
}

function Frame1686557049() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686557046 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Mode of Membership</p>
      </div>
    </div>
  );
}

function Frame1686556819() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Invitation</p>
      </div>
    </div>
  );
}

function Frame1686556820() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Users can join by invitation only</p>
      </div>
    </div>
  );
}

function Frame1686557071() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556819 />
      <Frame1686556820 />
    </div>
  );
}

function Frame() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex h-5 items-center justify-center ml-0 mt-0 relative w-[50px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}

function Frame1686556821() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center leading-[0] p-0 relative shrink-0 w-[220px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#000000] text-[16px] text-center w-[124px]">
        <p className="block leading-[1.2]">Maker Checker</p>
      </div>
      <Group2 />
    </div>
  );
}

function Frame1() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton1() {
  return (
    <div
      className="bg-[#043f50] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-[1.5px] pr-8 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex h-5 items-center justify-center ml-0 mt-0 relative w-[50px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557072() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center leading-[0] p-0 relative shrink-0 w-[220px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#000000] text-[16px] text-center w-[124px]">
        <p className="block leading-[1.2]">KYC Mandatory</p>
      </div>
      <Group3 />
    </div>
  );
}

function Frame2147224063() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0">
      <Frame1686556821 />
      <Frame1686557072 />
    </div>
  );
}

function Frame1686557073() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686557071 />
      <Frame2147224063 />
    </div>
  );
}

function Frame1686557069() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557073 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686556822() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Enrollment</p>
      </div>
    </div>
  );
}

function Frame1686556823() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Open enrollment with form submission</p>
      </div>
    </div>
  );
}

function Frame1686557079() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686556822 />
      <Frame1686556823 />
    </div>
  );
}

function Frame2() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton2() {
  return (
    <div
      className="bg-[#043f50] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-[1.5px] pr-8 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex h-5 items-center justify-center ml-0 mt-0 relative w-[50px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton2 />
        </div>
      </div>
    </div>
  );
}

function Frame1686556824() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center leading-[0] p-0 relative shrink-0 w-[220px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#000000] text-[16px] text-center w-[124px]">
        <p className="block leading-[1.2]">Maker Checker</p>
      </div>
      <Group4 />
    </div>
  );
}

function Frame3() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton3() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex h-5 items-center justify-center ml-0 mt-0 relative w-[50px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton3 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557080() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center leading-[0] p-0 relative shrink-0 w-[220px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#000000] text-[16px] text-center w-[124px]">
        <p className="block leading-[1.2]">KYC Mandatory</p>
      </div>
      <Group5 />
    </div>
  );
}

function Frame2147224064() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0">
      <Frame1686556824 />
      <Frame1686557080 />
    </div>
  );
}

function Frame1686557082() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686557079 />
      <Frame2147224064 />
    </div>
  );
}

function Frame1686557070() {
  return (
    <div className="bg-[#d4f0f7] relative rounded-2xl shrink-0 w-[478px]">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start overflow-clip px-5 py-4 relative w-[478px]">
        <Frame1686557082 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#043f50] border-solid inset-0 pointer-events-none rounded-2xl"
      />
    </div>
  );
}

function Frame1686557062() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557069 />
      <Frame1686557070 />
    </div>
  );
}

function Frame1686557008() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557049 />
      <Frame1686557062 />
    </div>
  );
}

function Frame1686557011() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557008 />
    </div>
  );
}

function Frame1686557010() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[30px] p-[30px] rounded-[20px] top-[348px] w-[1530px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <Frame1686557011 />
    </div>
  );
}

function Group1686551186() {
  return <div className="absolute contents left-[795px] top-[597px]" />;
}

function MaterialSymbolsIdCardOutlineRounded() {
  return (
    <div
      className="absolute left-1/2 size-6 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="material-symbols:id-card-outline-rounded"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:id-card-outline-rounded">
          <path d={svgPaths.p4672a00} fill="var(--fill-0, #043F50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686557050() {
  return (
    <div className="bg-[#ccdbdf] overflow-clip relative rounded shrink-0 size-7">
      <MaterialSymbolsIdCardOutlineRounded />
    </div>
  );
}

function Frame1686557051() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686557050 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">KYC Documents Validation</p>
      </div>
    </div>
  );
}

function Frame1686557013() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557051 />
    </div>
  );
}

function Frame1686557014() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557013 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <g id="Group">
            <path d={svgPaths.p761f800} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path
              d="M9 13H5M13 13H11.5M1 7H21"
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarCardLinear() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="solar:card-linear">
      <Group />
    </div>
  );
}

function Frame1686557083() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <SolarCardLinear />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Pan Card Validation</p>
      </div>
    </div>
  );
}

function Frame638() {
  return (
    <div className="bg-[#043f50] box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-[13px] pt-3 px-[42px] relative rounded-[18px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.35)] shrink-0 w-[162px]">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Online</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_8px_0px_inset_rgba(54,101,115,0.4),0px_8px_12px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame639() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-[13px] pt-3 px-10 relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#043f50] text-[16px] text-center text-nowrap tracking-[-0.32px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Offline</p>
      </div>
    </div>
  );
}

function Frame1686557077() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-row items-center justify-center p-[8px] relative rounded-[20px] shrink-0">
      <Frame638 />
      <Frame639 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_8px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame1686557067() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame1686557083 />
      <Frame1686557077 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <g id="Group">
            <path d={svgPaths.p761f800} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path
              d="M9 13H5M13 13H11.5M1 7H21"
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarCardLinear1() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="solar:card-linear">
      <Group1 />
    </div>
  );
}

function Frame1686557084() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <SolarCardLinear1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Aadhar Card Validation</p>
      </div>
    </div>
  );
}

function Frame640() {
  return (
    <div className="bg-[#043f50] box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-[13px] pt-3 px-[42px] relative rounded-[18px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.35)] shrink-0 w-[162px]">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Online</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_8px_0px_inset_rgba(54,101,115,0.4),0px_8px_12px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame641() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-[13px] pt-3 px-10 relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#043f50] text-[16px] text-center text-nowrap tracking-[-0.32px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Offline</p>
      </div>
    </div>
  );
}

function Frame1686557085() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-row items-center justify-center p-[8px] relative rounded-[20px] shrink-0">
      <Frame640 />
      <Frame641 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_8px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame1686557068() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame1686557084 />
      <Frame1686557085 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[12.11%_11.46%_10.92%_11.46%]" data-name="Group">
      <div className="absolute inset-[-4.06%_-4.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path
              d={svgPaths.p2e79840}
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.pf35ee00}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProiconsBank() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="proicons:bank">
      <Group6 />
    </div>
  );
}

function Frame1686557086() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <ProiconsBank />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Bank Transfer Validation</p>
      </div>
    </div>
  );
}

function Frame642() {
  return (
    <div className="bg-[#043f50] box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-[13px] pt-3 px-[42px] relative rounded-[18px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.35)] shrink-0 w-[162px]">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Online</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_8px_0px_inset_rgba(54,101,115,0.4),0px_8px_12px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame643() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-[13px] pt-3 px-10 relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#043f50] text-[16px] text-center text-nowrap tracking-[-0.32px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Offline</p>
      </div>
    </div>
  );
}

function Frame1686557087() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-row items-center justify-center p-[8px] relative rounded-[20px] shrink-0">
      <Frame642 />
      <Frame643 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_8px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame1686557088() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame1686557086 />
      <Frame1686557087 />
    </div>
  );
}

function Frame1686557094() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0">
      <Frame1686557067 />
      <Frame1686557068 />
      <Frame1686557088 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[20.83%_8.33%_21.88%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1f2ed900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p31f73e50} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function CodiconGame() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="codicon:game">
      <Group7 />
    </div>
  );
}

function Frame1686557090() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <CodiconGame />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Checker</p>
      </div>
    </div>
  );
}

function Frame1686556825() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Bank Checker</p>
      </div>
    </div>
  );
}

function Frame1686557092() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
      <Frame1686556825 />
    </div>
  );
}

function Frame1686557081() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 h-[60px] items-center justify-center overflow-clip px-9 py-3 relative rounded-2xl shrink-0 w-[220px]">
      <Frame1686557092 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_8px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame1686557093() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center left-1/2 p-0 top-0 translate-x-[-50%]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">KYC Checker</p>
      </div>
    </div>
  );
}

function Frame1686557089() {
  return (
    <div className="h-[18px] relative shrink-0 w-[142px]">
      <Frame1686557093 />
    </div>
  );
}

function Frame1686557078() {
  return (
    <div className="bg-[#043f50] box-border content-stretch flex flex-col gap-2.5 h-[60px] items-center justify-center overflow-clip pb-[13px] pt-3 px-[42px] relative rounded-[18px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.35)] shrink-0 w-[220px]">
      <Frame1686557089 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_8px_0px_inset_rgba(54,101,115,0.4),0px_8px_12px_0px_inset_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame1686557007() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 h-[60px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557081 />
      <Frame1686557078 />
    </div>
  );
}

function Frame1686557091() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame1686557090 />
      <Frame1686557007 />
    </div>
  );
}

function Frame1686557095() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
      <Frame1686557094 />
      <div className="flex h-[100px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[100px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 2">
                <line
                  id="Line 21"
                  stroke="var(--stroke-0, #D2D7D8)"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  strokeWidth="2"
                  x1="1"
                  x2="99"
                  y1="1"
                  y2="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1686557091 />
    </div>
  );
}

function Frame1686557066() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557014 />
      <Frame1686557095 />
    </div>
  );
}

function Frame1686557015() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[30px] p-[30px] rounded-[20px] top-[637px] w-[1530px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <Frame1686557066 />
    </div>
  );
}

function Group1686551187() {
  return <div className="absolute contents left-[783px] top-[857px]" />;
}

function UilLayerGroup() {
  return (
    <div className="absolute left-1/2 size-6 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="uil:layer-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="uil:layer-group">
          <path d={svgPaths.p3a340500} fill="var(--fill-0, #043F50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686557052() {
  return (
    <div className="bg-[#ccdbdf] overflow-clip relative rounded shrink-0 size-7">
      <UilLayerGroup />
    </div>
  );
}

function Frame1686557053() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686557052 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Accumulation</p>
      </div>
    </div>
  );
}

function Frame1686557016() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557053 />
    </div>
  );
}

function Frame1686557017() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557016 />
    </div>
  );
}

function Frame1686556826() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">QR Code Based</p>
      </div>
    </div>
  );
}

function Frame1686556827() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Scan QR code to accumulate points</p>
      </div>
    </div>
  );
}

function Frame1686557096() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556826 />
      <Frame1686556827 />
    </div>
  );
}

function Frame4() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton4() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame4 />
    </div>
  );
}

function Frame1686556828() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton4 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557097() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557096 />
      <Frame1686556828 />
    </div>
  );
}

function Frame1686557098() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557097 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686556829() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Barcode Based</p>
      </div>
    </div>
  );
}

function Frame1686556830() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Scan Barcode to accumulate points</p>
      </div>
    </div>
  );
}

function Frame1686557099() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686556829 />
      <Frame1686556830 />
    </div>
  );
}

function Frame5() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton5() {
  return (
    <div
      className="bg-[#043f50] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-[1.5px] pr-8 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame5 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex h-5 items-center justify-center ml-0 mt-0 relative w-[50px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton5 />
        </div>
      </div>
    </div>
  );
}

function Frame1686556831() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center leading-[0] p-0 relative shrink-0 w-[220px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <Group8 />
    </div>
  );
}

function Frame1686557100() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1686557099 />
      <Frame1686556831 />
    </div>
  );
}

function Frame1686557101() {
  return (
    <div className="bg-[#d4f0f7] relative rounded-2xl shrink-0 w-[478px]">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start overflow-clip px-5 py-4 relative w-[478px]">
        <Frame1686557100 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#043f50] border-solid inset-0 pointer-events-none rounded-2xl"
      />
    </div>
  );
}

function Frame1686556832() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Serial Number Based</p>
      </div>
    </div>
  );
}

function Frame1686556833() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Enter Serial number to accumulate points</p>
      </div>
    </div>
  );
}

function Frame1686557102() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556832 />
      <Frame1686556833 />
    </div>
  );
}

function Frame6() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton6() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame6 />
    </div>
  );
}

function Frame1686556834() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton6 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557103() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557102 />
      <Frame1686556834 />
    </div>
  );
}

function Frame1686557104() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557103 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686556835() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Form Based</p>
      </div>
    </div>
  );
}

function Frame1686556836() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Fill form to accumulate points</p>
      </div>
    </div>
  );
}

function Frame1686557105() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556835 />
      <Frame1686556836 />
    </div>
  );
}

function Frame7() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton7() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame7 />
    </div>
  );
}

function Frame1686556837() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton7 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557106() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557105 />
      <Frame1686556837 />
    </div>
  );
}

function Frame1686557107() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557106 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686556838() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">OCR Based</p>
      </div>
    </div>
  );
}

function Frame1686556839() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Upload receipts for automatic recognition</p>
      </div>
    </div>
  );
}

function Frame1686557108() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556838 />
      <Frame1686556839 />
    </div>
  );
}

function Frame8() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton8() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame8 />
    </div>
  );
}

function Frame1686556840() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton8 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557109() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557108 />
      <Frame1686556840 />
    </div>
  );
}

function Frame1686557110() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557109 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686556841() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Invoice Based</p>
      </div>
    </div>
  );
}

function Frame1686556842() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Upload invoices for verification</p>
      </div>
    </div>
  );
}

function Frame1686557111() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556841 />
      <Frame1686556842 />
    </div>
  );
}

function Frame9() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton9() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame9 />
    </div>
  );
}

function Frame1686556843() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton9 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557112() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557111 />
      <Frame1686556843 />
    </div>
  );
}

function Frame1686557074() {
  return (
    <div className="bg-[#d4f0f7] relative rounded-2xl shrink-0 w-[478px]">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start overflow-clip px-5 py-4 relative w-[478px]">
        <Frame1686557112 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#043f50] border-solid inset-0 pointer-events-none rounded-2xl"
      />
    </div>
  );
}

function Frame1686556844() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">{`Refer & Earn`}</p>
      </div>
    </div>
  );
}

function Frame1686556845() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Refer to accumulate points</p>
      </div>
    </div>
  );
}

function Frame1686557113() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556844 />
      <Frame1686556845 />
    </div>
  );
}

function Frame10() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton10() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame10 />
    </div>
  );
}

function Frame1686556846() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton10 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557114() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557113 />
      <Frame1686556846 />
    </div>
  );
}

function Frame1686557075() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557114 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686556847() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">API Based</p>
      </div>
    </div>
  );
}

function Frame1686556848() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">API to accumulate points</p>
      </div>
    </div>
  );
}

function Frame1686557115() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556847 />
      <Frame1686556848 />
    </div>
  );
}

function Frame11() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton11() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame11 />
    </div>
  );
}

function Frame1686556849() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton11 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557116() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557115 />
      <Frame1686556849 />
    </div>
  );
}

function Frame1686557076() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557116 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686556850() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#043f50] text-[20px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">P2P Transfer</p>
      </div>
    </div>
  );
}

function Frame1686556851() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">P2P Transfer to accumulate points</p>
      </div>
    </div>
  );
}

function Frame1686557117() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686556850 />
      <Frame1686556851 />
    </div>
  );
}

function Frame12() {
  return <div className="bg-[#ffffff] rounded-[45px] shrink-0 size-4" data-name="Frame" />;
}

function ToggleButton12() {
  return (
    <div
      className="bg-[#d9d9d9] box-border content-stretch flex flex-row h-5 items-center justify-end overflow-clip pl-1 pr-0.5 py-1 relative rounded-[62px] w-[50px]"
      data-name="Toggle Button"
    >
      <Frame12 />
    </div>
  );
}

function Frame1686556852() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.2] whitespace-pre">Maker Checker</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ToggleButton12 />
        </div>
      </div>
    </div>
  );
}

function Frame1686557118() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557117 />
      <Frame1686556852 />
    </div>
  );
}

function Frame1686557119() {
  return (
    <div className="bg-[#f0f6f7] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-5 py-4 relative rounded-2xl shrink-0 w-[478px]">
      <Frame1686557118 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_20px_0px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1686557120() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-between p-0 relative shrink-0 w-full">
      <Frame1686557098 />
      <Frame1686557101 />
      <Frame1686557104 />
      <Frame1686557107 />
      <Frame1686557110 />
      <Frame1686557074 />
      <Frame1686557075 />
      <Frame1686557076 />
      <Frame1686557119 />
    </div>
  );
}

function Frame1686557121() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557017 />
      <Frame1686557120 />
    </div>
  );
}

function Frame1686557122() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1686557121 />
    </div>
  );
}

function Frame1686557012() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[30px] p-[30px] rounded-[20px] top-[897px] w-[1530px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <Frame1686557122 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.556%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path
              d={svgPaths.pc5824c0}
              id="Vector"
              stroke="var(--stroke-0, #4D4D4D)"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M10 6V14M6 10H14"
              id="Vector_2"
              stroke="var(--stroke-0, #4D4D4D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineAdd1() {
  return (
    <div className="absolute left-[783px] overflow-clip size-6 top-[1454px]" data-name="icon-park-outline:add">
      <Group9 />
    </div>
  );
}

function Group1686551167() {
  return (
    <div className="absolute contents left-[783px] top-[1454px]">
      <IconParkOutlineAdd1 />
    </div>
  );
}

function Group1686551188() {
  return (
    <div className="absolute contents left-[783px] top-[1416px]">
      <Group1686551167 />
    </div>
  );
}

function Frame1686556766() {
  return (
    <div className="absolute bg-[#ccdbdf] h-[1492px] left-[300px] overflow-x-clip overflow-y-auto rounded-[40px] top-[196px] w-[1590px]">
      <Frame1686557044 />
      <Group1686551185 />
      <Frame1686557010 />
      <Group1686551186 />
      <Frame1686557015 />
      <Group1686551187 />
      <Frame1686557012 />
      <Group1686551188 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] h-[60px] ml-[0.001%] mt-0 relative w-[60.984px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 60">
        <g id="Group">
          <path d={svgPaths.p13a97f00} fill="var(--fill-0, #043F50)" id="Vector" />
          <path d={svgPaths.p3798f380} fill="var(--fill-0, #A10B3F)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p22ee9580} fill="var(--fill-0, white)" id="Vector_3" />
            <g id="Group_3">
              <path d={svgPaths.p3b24a070} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p15200} fill="var(--fill-0, #AFDAE1)" id="Vector_5" />
            </g>
            <path d={svgPaths.p1237c900} fill="var(--fill-0, #AFDAE1)" id="Vector_6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Group"
    >
      <Group12 />
    </div>
  );
}

function Frame1686554540() {
  return (
    <div className="bg-[rgba(204,219,223,0.5)] box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[94px] py-2.5 relative rounded-lg shrink-0 w-[248px]">
      <div
        aria-hidden="true"
        className="absolute border-[#9c9c9c] border-[1.25px] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]"
      />
      <Group13 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_10.2px_0px_inset_rgba(255,255,255,0.3)]" />
    </div>
  );
}

function Frame1686556772() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[7px] h-7 items-center justify-start p-0 relative shrink-0 w-[186px]">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap">
        <p className="leading-[16px] whitespace-pre">
          <span className="text-[#5b5b5b]">{`Dashboard  /  Program Configuration`}</span>
          <span>{` / Create Program Configuration`}</span>
        </p>
      </div>
    </div>
  );
}

function VuesaxLinearNotification() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="notification">
          <path
            d={svgPaths.p2e393100}
            id="Vector"
            stroke="var(--stroke-0, #043F50)"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p3718def0}
            id="Vector_2"
            stroke="var(--stroke-0, #043F50)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p21656e00}
            id="Vector_3"
            stroke="var(--stroke-0, #043F50)"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Notification1() {
  return (
    <div className="relative shrink-0 size-6" data-name="notification">
      <VuesaxLinearNotification />
    </div>
  );
}

function Frame1686554505() {
  return (
    <div
      className="bg-[#043f50] bg-[position:50%_50%,_0%_0%] bg-size-[cover,auto] rounded-[28px] shrink-0 size-11"
      style={{ backgroundImage: `url('${imgFrame1686554505}')` }}
    />
  );
}

function NameAndEmail() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-left text-nowrap"
      data-name="Name and Email"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#141414]">
        <p className="block leading-[16.8px] text-nowrap whitespace-pre">Jhon Doe</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#000000]">
        <p className="block leading-[16.8px] text-nowrap whitespace-pre">1234567899</p>
      </div>
    </div>
  );
}

function ProfileFrame() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Profile Frame"
    >
      <Frame1686554505 />
      <NameAndEmail />
    </div>
  );
}

function ProfileAndNotificationFrame() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-[229px]"
      data-name="Profile and notification frame"
    >
      <Notification1 />
      <ProfileFrame />
    </div>
  );
}

function TopNav() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[52px] items-center justify-between px-0 py-3 relative rounded-xl shadow-[0px_0px_88px_0px_rgba(4,63,80,0.2)] shrink-0 w-[1512px]"
      data-name="Top Nav"
    >
      <Frame1686556772 />
      <ProfileAndNotificationFrame />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path
            d={svgPaths.p272bfa00}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <Search />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap">
        <p className="block leading-[19.2px] whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-11 items-center justify-start px-3.5 py-2 relative rounded-xl shrink-0 w-[853px]"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      />
      <Content />
    </div>
  );
}

function FiltersLines() {
  return (
    <div className="relative shrink-0 size-5" data-name="Filters lines">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Filters lines">
          <path
            d={svgPaths.p29f1100}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.67"
          />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#ffffff] h-11 relative rounded-xl shrink-0" data-name="_Button base">
      <div className="box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center overflow-clip px-4 py-2.5 relative">
        <FiltersLines />
        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-left text-nowrap">
          <p className="block leading-[16.8px] whitespace-pre">Filters</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c2c2c2] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      />
    </div>
  );
}

function VuesaxLinearArrowDown() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-down">
          <path
            d={svgPaths.p1ab14f10}
            id="Vector"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="arrow-down">
      <VuesaxLinearArrowDown />
    </div>
  );
}

function Frame1686554466() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">Corporate</p>
      </div>
      <ArrowDown1 />
    </div>
  );
}

function Frame1686554468() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-1.5 relative rounded-xl shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div
        className="bg-center bg-cover bg-no-repeat relative rounded-[29px] shrink-0 size-8"
        data-name="image 4"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[29px]"
        />
      </div>
      <Frame1686554466 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[5%_2.5%_5%_7.5%]" data-name="Group">
      <div className="absolute inset-[-2.778%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p1b2be500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p9843980} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1686554981() {
  return (
    <div className="overflow-clip relative shrink-0 size-5">
      <Group14 />
    </div>
  );
}

function LableWithIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
      data-name="Lable with icon"
    >
      <Frame1686554981 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[19.2px] whitespace-pre">Create Program Configuration</p>
      </div>
    </div>
  );
}

function SkeletonButton() {
  return (
    <div
      className="bg-[#043f50] box-border content-stretch flex flex-row gap-2.5 h-11 items-center justify-start px-6 py-0 relative rounded-lg shrink-0"
      data-name="Skeleton Button"
    >
      <LableWithIcon />
    </div>
  );
}

function SizeButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-11 items-start justify-start p-0 relative rounded-lg shrink-0"
      data-name="Size Button"
    >
      <SkeletonButton />
    </div>
  );
}

function Frame1686556758() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0">
      <Frame1686554468 />
      <SizeButton />
    </div>
  );
}

function Frame1686556762() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0">
      <Input />
      <ButtonBase />
      <Frame1686556758 />
    </div>
  );
}

function Frame1686556798() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1539px]"
      style={{ left: "calc(50% + 13.5px)" }}
    >
      <TopNav />
      <Frame1686556762 />
    </div>
  );
}

function Frame1686556767() {
  return (
    <div className="bg-[#ccdbdf] h-[142px] overflow-clip relative rounded-[28px] shrink-0 w-[1590px]">
      <Frame1686556798 />
    </div>
  );
}

function Frame1686557009() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 pointer-events-auto sticky top-0 w-[1864px]">
      <Frame1686554540 />
      <Frame1686556767 />
    </div>
  );
}

function ArrowDown2() {
  return (
    <div className="absolute inset-[36.51%_5.88%_62.09%_93.39%]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 24">
        <g id="arrow-down">
          <g id="Vector" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown1() {
  return (
    <div className="absolute contents inset-[36.51%_5.88%_62.09%_93.39%]" data-name="vuesax/linear/arrow-down">
      <ArrowDown2 />
    </div>
  );
}

function SolarHomeBold() {
  return (
    <div className="relative shrink-0 size-5" data-name="solar:home-bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="solar:home-bold">
          <path d={svgPaths.p33d95400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pe3e3000} fill="var(--fill-0, white)" id="Vector_2" />
          <path
            clipRule="evenodd"
            d={svgPaths.p25c8df00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_3"
          />
          <path d={svgPaths.pe3e3000} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686554541() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <SolarHomeBold />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Brands</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <g id="Vector"></g>
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight />
    </div>
  );
}

function Main() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554541 />
      <ArrowRight1 />
    </div>
  );
}

function SubMenu() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Sub menu"
    >
      <Main />
    </div>
  );
}

function IxDashboardFilled() {
  return (
    <div className="relative shrink-0 size-5" data-name="ix:dashboard-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ix:dashboard-filled">
          <path clipRule="evenodd" d={svgPaths.p22bf0380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686554542() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <IxDashboardFilled />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <g id="Vector"></g>
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight1 />
    </div>
  );
}

function Main1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554542 />
      <ArrowRight3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p98aa180} fill="var(--fill-0, #043F50)" id="Vector" />
          <path d={svgPaths.p13ffba00} fill="var(--fill-0, #043F50)" id="Vector_2" />
          <path d={svgPaths.p2ca86e00} fill="var(--fill-0, #043F50)" id="Vector_3" />
          <path d={svgPaths.p30e79800} fill="var(--fill-0, #043F50)" id="Vector_4" />
          <g id="Vector_5"></g>
        </g>
      </svg>
    </div>
  );
}

function Frame1686554543() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Frame13 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#043f50] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Program Console</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path
            d={svgPaths.p3117bd00}
            id="Vector"
            stroke="var(--stroke-0, #043F50)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight5() {
  return (
    <div className="relative size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight2 />
    </div>
  );
}

function Main2() {
  return (
    <div
      className="bg-[#cbd5da] box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative rounded-lg shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554543 />
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[12px]">
        <div className="flex-none rotate-[90deg]">
          <ArrowRight5 />
        </div>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[6.21%_6.25%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p192b6900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Frame">
      <Group16 />
    </div>
  );
}

function Main4() {
  return (
    <div className="relative shrink-0 w-full" data-name="main">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <Frame14 />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Program Master</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IxProjectConfiguration() {
  return (
    <div className="relative shrink-0 size-5" data-name="ix:project-configuration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ix:project-configuration">
          <path clipRule="evenodd" d={svgPaths.p1688f800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Main5() {
  return (
    <div className="bg-[rgba(203,214,219,0.3)] relative rounded-lg shrink-0 w-full" data-name="main">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <IxProjectConfiguration />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Program Configuration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxOutlinePeople() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/people">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="people">
          <path d={svgPaths.p39c14b00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p334dd80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p262b5080} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p647e400} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3f0bd000} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p27e800} fill="var(--fill-0, white)" id="Vector_6" />
          <g id="Vector_7" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function People1() {
  return (
    <div className="relative shrink-0 size-5" data-name="people">
      <VuesaxOutlinePeople />
    </div>
  );
}

function Main6() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="main">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <People1 />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Program User</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearKeySquare() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/key-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="key-square">
          <path
            d={svgPaths.p1e16c800}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.p2b3de00}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.2"
          />
          <path
            d="M8.70833 13.5667L8 12.85"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.2"
          />
          <path
            d="M11.1621 8.91663H11.1696"
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function KeySquare1() {
  return (
    <div className="relative shrink-0 size-5" data-name="key-square">
      <VuesaxLinearKeySquare />
    </div>
  );
}

function Main7() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="main">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <KeySquare1 />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Role Based Access Control</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EosIconsConfigurationFileOutlined() {
  return (
    <div className="relative shrink-0 size-5" data-name="eos-icons:configuration-file-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="eos-icons:configuration-file-outlined">
          <path d={svgPaths.p186ffd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p27db3d80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Main8() {
  return (
    <div className="relative shrink-0 w-full" data-name="main">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <EosIconsConfigurationFileOutlined />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Program Docs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[10%_5%]" data-name="Group">
      <div className="absolute inset-[-3.47%_-2.61%_-3.05%_-2.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <g id="Group">
            <path
              d={svgPaths.p2afb16c0}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeWidth="0.8"
            />
            <path
              d={svgPaths.p2cd69d00}
              fill="var(--fill-0, white)"
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeWidth="0.8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Icon/2">
      <Group17 />
    </div>
  );
}

function Main9() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="main">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <Icon2 />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Currency Master</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IcRoundQrCode() {
  return (
    <div className="relative shrink-0 size-5" data-name="ic:round-qr-code">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic:round-qr-code">
          <path d={svgPaths.p3db1db00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Main10() {
  return (
    <div className="relative shrink-0 w-full" data-name="main">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <IcRoundQrCode />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Invite Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1686554721() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[248px]">
      <Main4 />
      <Main5 />
      <Main6 />
      <Main7 />
      <Main8 />
      <Main9 />
      <Main10 />
    </div>
  );
}

function SubMenu1() {
  return (
    <div
      className="bg-[rgba(202,217,221,0.1)] box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative rounded-xl shrink-0 w-[248px]"
      data-name="Sub menu"
    >
      <Main2 />
      <Frame1686554721 />
    </div>
  );
}

function SubMenu2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative rounded-xl shrink-0 w-[248px]"
      data-name="Sub menu"
    >
      <SubMenu1 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p2f97500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Frame">
      <Group18 />
    </div>
  );
}

function Frame1686554544() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Frame15 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Rule Engine</p>
      </div>
    </div>
  );
}

function Main11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554544 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute bottom-[15%] left-0 right-[0.01%] top-[15.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g id="Group">
          <path d={svgPaths.p2e837b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Frame">
      <Group19 />
    </div>
  );
}

function Frame1686554545() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Frame16 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">User Management</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path
            d={svgPaths.p3117bd00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight7() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight3 />
    </div>
  );
}

function Main12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554545 />
      <ArrowRight7 />
    </div>
  );
}

function SubMenu3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Sub menu"
    >
      <Main12 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-0 left-[10%] right-[10.51%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1354ea80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p7faed00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Frame">
      <Group20 />
    </div>
  );
}

function Frame1686554546() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Frame17 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Records Upload</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path
            d={svgPaths.p3117bd00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight9() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight4 />
    </div>
  );
}

function Main13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554546 />
      <ArrowRight9 />
    </div>
  );
}

function SubMenu4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Sub menu"
    >
      <Main13 />
    </div>
  );
}

function FluentContentView20Filled() {
  return (
    <div className="relative shrink-0 size-5" data-name="fluent:content-view-20-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:content-view-20-filled">
          <path d={svgPaths.p28945ee0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686554547() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <FluentContentView20Filled />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Content Management</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight5() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path
            d={svgPaths.p3117bd00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight11() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight5 />
    </div>
  );
}

function Main14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554547 />
      <ArrowRight11 />
    </div>
  );
}

function SubMenu5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Sub menu"
    >
      <Main14 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p2e732800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Frame">
      <Group21 />
    </div>
  );
}

function Frame1686554548() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Frame18 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Mandi</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight6() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path
            d={svgPaths.p3117bd00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight13() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight6 />
    </div>
  );
}

function Main15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554548 />
      <ArrowRight13 />
    </div>
  );
}

function SubMenu6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Sub menu"
    >
      <Main15 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-[10%] left-0 right-0 top-[15%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p10f4fb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="Frame">
      <Group22 />
    </div>
  );
}

function Frame1686554549() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Frame19 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Gamification</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight7() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path
            d={svgPaths.p3117bd00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight15() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight7 />
    </div>
  );
}

function Main16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554549 />
      <ArrowRight15 />
    </div>
  );
}

function SubMenu7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Sub menu"
    >
      <Main16 />
    </div>
  );
}

function DashiconsRestApi() {
  return (
    <div className="relative shrink-0 size-5" data-name="dashicons:rest-api">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="dashicons:rest-api">
          <path d={svgPaths.p15c7400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686554550() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <DashiconsRestApi />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">API Gateway</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight8() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path
            d={svgPaths.p3117bd00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight17() {
  return (
    <div className="relative shrink-0 size-3" data-name="arrow-right">
      <VuesaxLinearArrowRight8 />
    </div>
  );
}

function Main17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-4 py-2 relative shrink-0 w-[248px]"
      data-name="main"
    >
      <Frame1686554550 />
      <ArrowRight17 />
    </div>
  );
}

function SubMenu8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Sub menu"
    >
      <Main17 />
    </div>
  );
}

function Frame1686554682() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0">
      <SubMenu />
      <Main1 />
      <SubMenu2 />
      <Main11 />
      <SubMenu3 />
      <SubMenu4 />
      <SubMenu5 />
      <SubMenu6 />
      <SubMenu7 />
      <SubMenu8 />
    </div>
  );
}

function Frame1686556799() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-5 h-[761px] items-center justify-start left-[26px] overflow-clip p-0 top-[169px] w-[248px]">
      <Frame1686554682 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[17.71%_17.71%_17.7%_14.58%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
        <g id="Group">
          <path d={svgPaths.p12bb3200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p29825680} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="overflow-clip relative size-5" data-name="Frame">
      <Group23 />
    </div>
  );
}

function Frame2147224060() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame20 />
        </div>
      </div>
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Log out</p>
      </div>
    </div>
  );
}

function Frame1686554551() {
  return (
    <div className="bg-[#366573] relative rounded-lg shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#9c9c9c] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-16 py-2 relative w-full">
          <Frame2147224060 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_10.2px_0px_inset_rgba(255,255,255,0.3)]" />
    </div>
  );
}

function Frame1686554986() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 h-[54.039px] items-center justify-start px-0 py-2 top-[929.96px] translate-x-[-50%] w-[248px]"
      style={{ left: "calc(50% - 810px)" }}
    >
      <Frame1686554551 />
    </div>
  );
}

function Group1686551076() {
  return (
    <div className="absolute contents top-[929.96px] translate-x-[-50%]" style={{ left: "calc(50% - 810px)" }}>
      <Frame1686554986 />
    </div>
  );
}

export default function ProgramConfiguration() {
  return (
    <div className="bg-[#043f50] overflow-clip relative rounded-[40px] size-full" data-name="Program Configuration">
      <Frame1686556799 />
      <Group1686551076 />
      <Frame1686556766 />
      <div
        className="absolute bottom-0 left-[26px] pointer-events-none top-[30px]"
        style={{ height: "calc(100% - 30px)" }}
      >
        <Frame1686557009 />
      </div>
      <VuesaxLinearArrowDown1 />
    </div>
  );
}