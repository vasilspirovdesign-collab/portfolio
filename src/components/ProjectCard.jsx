import projectBg from '../assets/project-bg.png'
const projectScreenshot = 'https://www.figma.com/api/mcp/asset/7e5cfbd8-a6b1-46d7-a671-58627c881835'

export default function ProjectCard({ title = 'Opus Edu', description = 'Lorem ipsum dolor sit amet consectetur.' }) {
  return (
    <div className="flex w-[329px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[8px] bg-white transition-transform hover:-translate-y-1 hover:shadow-lg">
      {/* Image area */}
      <div className="relative h-[219px] w-full overflow-hidden">
        <img src={projectBg} alt="" className="absolute inset-0 size-full max-w-none object-cover" />
        <img
          src={projectScreenshot}
          alt={title}
          className="absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
        />
      </div>

      {/* Text area */}
      <div className="flex flex-col gap-[4px] p-[12px]">
        <p
          className="overflow-hidden text-ellipsis whitespace-nowrap text-[22px] font-semibold leading-[28px] text-[#414141]"
          style={{ fontFeatureSettings: "'liga' 0" }}
        >
          {title}
        </p>
        <p className="line-clamp-3 text-[18px] font-medium leading-[1.2] tracking-[-0.18px] text-[#757575]">
          {description}
        </p>
      </div>
    </div>
  )
}
