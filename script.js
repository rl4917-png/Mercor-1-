// ========================================
// Sample Project Data (Hard-coded) - 25 Projects
// ========================================
const projects = [
    {
        id: 1,
        title: "Go语言代码基准测试开发",
        company: "某领先AI实验室",
        description: "帮助训练AI系统，开发Go语言编程基准测试",
        detailedDescription: `招聘Go工程师支持AI实验室研究合作，通过开发编程基准测试改进AI系统。

核心职责：开发Go语言基准测试、编写测试套件、提供代码质量反馈、优化测试代码。

理想资格：3年以上后端开发经验、计算机科学学位、精通Go语言、熟悉测试和调试。

项目详情：1个月项目、每周15-20小时、完全远程异步工作。

薪酬：¥100-¥120/小时，每周结算。

申请流程：提交简历 → AI面试15分钟 → 编码评估 → 入职。`,
        pay: "¥100-¥120/小时",
        payMin: 100,
        payMax: 120,
        duration: "1 个月",
        durationDays: 30,
        domains: ["工程"],
        skills: ["3年以上Go开发经验", "计算机科学学位", "测试和调试能力"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project1"
    },
    {
        id: 2,
        title: "AI训练数据标注 - 通用",
        company: "某AI研究机构",
        description: "为大语言模型标注训练数据，改进AI性能",
        detailedDescription: `招募在读学生或毕业生为AI模型标注数据。

工作内容：评估AI响应、标注文本数据、开发测试用例、提供反馈。

要求：本科或以上在读/已毕业、优秀的中文理解能力、注重细节、遵循指令。

项目：灵活周期、每周10-20小时、完全远程。

薪酬：¥35-¥55/小时，按任务结算。

流程：提交简历 → 在线测评 → 匹配项目。`,
        pay: "¥35-¥55/小时",
        payMin: 35,
        payMax: 55,
        duration: "灵活",
        durationDays: 60,
        domains: ["教育"],
        skills: ["本科以上学历", "中文理解能力强", "细节关注"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project2"
    },
    {
        id: 3,
        title: "Python数据处理项目",
        company: "某科技公司",
        description: "使用Python处理和清洗大规模数据集",
        detailedDescription: `需要Python开发者处理AI训练数据。

职责：数据清洗、编写处理脚本、数据质量验证、自动化任务。

资格：2年以上Python经验、熟悉Pandas/NumPy、数据处理经验。

项目：2个月、每周20小时、远程工作。

薪酬：¥80-¥100/小时。

申请：简历 → 编程测试 → 面试。`,
        pay: "¥80-¥100/小时",
        payMin: 80,
        payMax: 100,
        duration: "2 个月",
        durationDays: 60,
        domains: ["工程"],
        skills: ["2年Python经验", "熟悉数据处理库", "自动化脚本"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project3"
    },
    {
        id: 4,
        title: "对话质量评估",
        company: "某对话AI公司",
        description: "评估AI对话系统的响应质量和自然度",
        detailedDescription: `评估AI对话质量。

工作：评估对话自然度、标注语言错误、测试多场景对话、提供改进建议。

要求：优秀中文表达、语言敏感度、耐心细致。

时间：1-3个月、每周15-25小时、远程。

薪酬：¥45-¥60/小时。`,
        pay: "¥45-¥60/小时",
        payMin: 45,
        payMax: 60,
        duration: "1-3 个月",
        durationDays: 60,
        domains: ["教育"],
        skills: ["中文表达能力", "语言敏感度", "细致耐心"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project4"
    },
    {
        id: 5,
        title: "JavaScript前端测试",
        company: "某Web开发平台",
        description: "为AI代码生成工具编写JavaScript测试用例",
        detailedDescription: `创建JavaScript编程测试。

职责：编写前端测试用例、验证代码功能、创建单元测试、文档编写。

要求：3年前端经验、精通JavaScript、熟悉测试框架。

项目：6周、每周15小时、远程。

薪酬：¥85-¥100/小时。`,
        pay: "¥85-¥100/小时",
        payMin: 85,
        payMax: 100,
        duration: "6 周",
        durationDays: 42,
        domains: ["工程"],
        skills: ["3年前端经验", "JavaScript精通", "测试框架"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project5"
    },
    {
        id: 6,
        title: "图像标注 - 物体识别",
        company: "某计算机视觉公司",
        description: "标注图像中的物体，训练视觉AI模型",
        detailedDescription: `图像数据标注项目。

工作：标注图像物体、绘制边界框、分类标注、质量检查。

要求：视觉敏感、注重细节、无需编程背景。

时间：持续项目、每周10-30小时、远程。

薪酬：¥30-¥45/小时。`,
        pay: "¥30-¥45/小时",
        payMin: 30,
        payMax: 45,
        duration: "持续",
        durationDays: 90,
        domains: ["运营"],
        skills: ["视觉敏感", "细致认真", "无需技术背景"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project6"
    },
    {
        id: 7,
        title: "医学文本标注",
        company: "某医疗AI公司",
        description: "标注医学文献和病历数据",
        detailedDescription: `需要医学背景人员标注数据。

职责：标注医学术语、分类疾病信息、审核AI输出、确保准确性。

要求：医学相关专业、1年以上经验、熟悉医学术语。

项目：3个月、每周20小时、远程。

薪酬：¥70-¥90/小时。`,
        pay: "¥70-¥90/小时",
        payMin: 70,
        payMax: 90,
        duration: "3 个月",
        durationDays: 90,
        domains: ["医疗"],
        skills: ["医学专业背景", "1年以上经验", "医学术语熟悉"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project7"
    },
    {
        id: 8,
        title: "法律文档分析",
        company: "某法律科技平台",
        description: "分析和标注法律合同文档",
        detailedDescription: `法律文档AI训练。

工作：标注合同条款、识别法律风险、分类法律文档、提供反馈。

要求：法律专业背景、2年实务经验、熟悉合同法。

时间：2-4个月、每周15-20小时、远程。

薪酬：¥90-¥110/小时。`,
        pay: "¥90-¥110/小时",
        payMin: 90,
        payMax: 110,
        duration: "2-4 个月",
        durationDays: 90,
        domains: ["法律"],
        skills: ["法律专业背景", "2年实务经验", "合同法熟悉"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project8"
    },
    {
        id: 9,
        title: "金融数据分析",
        company: "某金融AI平台",
        description: "分析金融数据，训练财务分析AI",
        detailedDescription: `金融领域AI训练。

职责：分析财务报表、评估AI投资建议、标注金融数据、风险识别。

要求：金融专业、3年行业经验、CFA优先。

项目：3个月、每周20-25小时、远程。

薪酬：¥95-¥115/小时。`,
        pay: "¥95-¥115/小时",
        payMin: 95,
        payMax: 115,
        duration: "3 个月",
        durationDays: 90,
        domains: ["金融"],
        skills: ["金融专业背景", "3年行业经验", "CFA优先"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project9"
    },
    {
        id: 10,
        title: "中英翻译质量评估",
        company: "某翻译AI公司",
        description: "评估AI翻译质量，提供改进建议",
        detailedDescription: `翻译AI质量评估。

工作：评估翻译准确性、检查语法错误、文化适应性评估、提供修改建议。

要求：中英双语流利、翻译经验、语言敏感度高。

时间：2个月、每周15-20小时、远程。

薪酬：¥60-¥80/小时。`,
        pay: "¥60-¥80/小时",
        payMin: 60,
        payMax: 80,
        duration: "2 个月",
        durationDays: 60,
        domains: ["教育"],
        skills: ["中英双语流利", "翻译经验", "语言敏感"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project10"
    },
    {
        id: 11,
        title: "客服对话数据整理",
        company: "某客服AI平台",
        description: "整理客服对话数据，优化AI客服系统",
        detailedDescription: `客服AI数据处理。

职责：整理对话记录、分类问题类型、标注情感倾向、质量检查。

要求：有客服经验优先、沟通能力强、细致耐心。

项目：1-2个月、每周20小时、远程。

薪酬：¥40-¥55/小时。`,
        pay: "¥40-¥55/小时",
        payMin: 40,
        payMax: 55,
        duration: "1-2 个月",
        durationDays: 45,
        domains: ["运营"],
        skills: ["客服经验优先", "沟通能力", "细致耐心"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project11"
    },
    {
        id: 12,
        title: "教育内容审核",
        company: "某在线教育AI",
        description: "审核AI生成的教育内容质量",
        detailedDescription: `教育内容质量把控。

工作：审核教学内容、检查知识准确性、评估教学方法、提供改进意见。

要求：教育专业背景、教学经验、学科知识扎实。

时间：3个月、每周15小时、远程。

薪酬：¥55-¥75/小时。`,
        pay: "¥55-¥75/小时",
        payMin: 55,
        payMax: 75,
        duration: "3 个月",
        durationDays: 90,
        domains: ["教育"],
        skills: ["教育专业背景", "教学经验", "学科知识"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project12"
    },
    {
        id: 13,
        title: "Java代码审查",
        company: "某代码AI平台",
        description: "审查AI生成的Java代码质量",
        detailedDescription: `Java代码质量评估。

职责：审查代码质量、检查bug、测试功能、提供优化建议。

要求：5年Java经验、熟悉Spring、代码规范意识强。

项目：2个月、每周15-20小时、远程。

薪酬：¥100-¥120/小时。`,
        pay: "¥100-¥120/小时",
        payMin: 100,
        payMax: 120,
        duration: "2 个月",
        durationDays: 60,
        domains: ["工程"],
        skills: ["5年Java经验", "熟悉Spring框架", "代码规范"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project13"
    },
    {
        id: 14,
        title: "语音转文字校对",
        company: "某语音AI公司",
        description: "校对AI语音识别结果",
        detailedDescription: `语音识别准确性提升。

工作：听录音校对文字、标注错误、方言识别、音质评估。

要求：普通话标准、听力好、打字快、耐心细致。

时间：持续项目、每周10-25小时、远程。

薪酬：¥35-¥50/小时。`,
        pay: "¥35-¥50/小时",
        payMin: 35,
        payMax: 50,
        duration: "持续",
        durationDays: 90,
        domains: ["运营"],
        skills: ["普通话标准", "听力好", "打字快"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project14"
    },
    {
        id: 15,
        title: "SQL查询优化",
        company: "某数据库AI工具",
        description: "编写和优化SQL查询测试用例",
        detailedDescription: `数据库AI训练。

职责：编写SQL测试、优化查询性能、设计数据库场景、验证结果。

要求：3年数据库经验、精通SQL、了解性能优化。

项目：6周、每周15小时、远程。

薪酬：¥85-¥105/小时。`,
        pay: "¥85-¥105/小时",
        payMin: 85,
        payMax: 105,
        duration: "6 周",
        durationDays: 42,
        domains: ["工程"],
        skills: ["3年数据库经验", "SQL精通", "性能优化"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project15"
    },
    {
        id: 16,
        title: "产品评论分析",
        company: "某电商AI平台",
        description: "分析用户评论情感和意图",
        detailedDescription: `电商评论AI训练。

工作：分析评论情感、提取关键信息、分类评论类型、标注意图。

要求：电商经验优先、理解能力强、细致认真。

时间：2个月、每周20小时、远程。

薪酬：¥45-¥60/小时。`,
        pay: "¥45-¥60/小时",
        payMin: 45,
        payMax: 60,
        duration: "2 个月",
        durationDays: 60,
        domains: ["运营"],
        skills: ["电商经验优先", "理解能力强", "细致认真"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project16"
    },
    {
        id: 17,
        title: "Rust系统编程",
        company: "某系统AI实验室",
        description: "开发Rust编程基准测试",
        detailedDescription: `Rust编程测试开发。

职责：编写系统级测试、内存安全验证、性能测试、代码审查。

要求：2年Rust经验、系统编程背景、安全意识强。

项目：1.5个月、每周15-20小时、远程。

薪酬：¥95-¥115/小时。`,
        pay: "¥95-¥115/小时",
        payMin: 95,
        payMax: 115,
        duration: "1.5 个月",
        durationDays: 45,
        domains: ["工程"],
        skills: ["2年Rust经验", "系统编程", "安全意识"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project17"
    },
    {
        id: 18,
        title: "文本分类标注",
        company: "某NLP研究机构",
        description: "标注文本数据用于分类模型训练",
        detailedDescription: `文本分类AI项目。

工作：阅读分类文本、标注主题类别、质量检查、一致性维护。

要求：阅读理解能力强、逻辑清晰、无需技术背景。

时间：2-3个月、每周20-30小时、远程。

薪酬：¥38-¥52/小时。`,
        pay: "¥38-¥52/小时",
        payMin: 38,
        payMax: 52,
        duration: "2-3 个月",
        durationDays: 75,
        domains: ["教育"],
        skills: ["阅读理解强", "逻辑清晰", "无需技术背景"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project18"
    },
    {
        id: 19,
        title: "数学题目生成",
        company: "某教育AI公司",
        description: "创建和验证AI数学题目",
        detailedDescription: `数学教育AI项目。

职责：创建数学题、验证解题步骤、难度分级、答案核对。

要求：数学专业、教学经验、逻辑思维强。

项目：3个月、每周15-20小时、远程。

薪酬：¥60-¥80/小时。`,
        pay: "¥60-¥80/小时",
        payMin: 60,
        payMax: 80,
        duration: "3 个月",
        durationDays: 90,
        domains: ["教育"],
        skills: ["数学专业", "教学经验", "逻辑思维"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project19"
    },
    {
        id: 20,
        title: "API文档编写",
        company: "某开发工具AI",
        description: "为AI生成的代码编写API文档",
        detailedDescription: `技术文档编写项目。

工作：编写API文档、代码注释、使用示例、文档审查。

要求：技术写作经验、编程基础、英文读写。

时间：2个月、每周15小时、远程。

薪酬：¥65-¥85/小时。`,
        pay: "¥65-¥85/小时",
        payMin: 65,
        payMax: 85,
        duration: "2 个月",
        durationDays: 60,
        domains: ["工程"],
        skills: ["技术写作", "编程基础", "英文能力"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project20"
    },
    {
        id: 21,
        title: "视频内容标注",
        company: "某视频AI平台",
        description: "标注视频中的动作和场景",
        detailedDescription: `视频理解AI项目。

职责：观看标注视频、识别动作场景、时间戳标记、质量检查。

要求：观察力强、耐心细致、无需技术背景。

项目：持续、每周15-30小时、远程。

薪酬：¥32-¥48/小时。`,
        pay: "¥32-¥48/小时",
        payMin: 32,
        payMax: 48,
        duration: "持续",
        durationDays: 90,
        domains: ["运营"],
        skills: ["观察力强", "耐心细致", "无需技术"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project21"
    },
    {
        id: 22,
        title: "C++性能优化",
        company: "某性能优化AI",
        description: "优化C++代码性能并创建测试",
        detailedDescription: `C++性能测试项目。

工作：编写性能测试、分析瓶颈、优化代码、基准测试。

要求：5年C++经验、性能优化专长、底层理解深。

项目：6周、每周15小时、远程。

薪酬：¥105-¥125/小时。`,
        pay: "¥105-¥125/小时",
        payMin: 105,
        payMax: 125,
        duration: "6 周",
        durationDays: 42,
        domains: ["工程"],
        skills: ["5年C++经验", "性能优化", "底层理解"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project22"
    },
    {
        id: 23,
        title: "问答对生成",
        company: "某问答AI系统",
        description: "创建高质量问答对用于训练",
        detailedDescription: `问答系统训练数据。

职责：编写问答对、验证答案准确性、多样性保证、质量审核。

要求：知识面广、逻辑清晰、表达能力强。

时间：2个月、每周20小时、远程。

薪酬：¥50-¥65/小时。`,
        pay: "¥50-¥65/小时",
        payMin: 50,
        payMax: 65,
        duration: "2 个月",
        durationDays: 60,
        domains: ["教育"],
        skills: ["知识面广", "逻辑清晰", "表达能力强"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project23"
    },
    {
        id: 24,
        title: "网络安全测试",
        company: "某安全AI工具",
        description: "创建安全漏洞检测测试用例",
        detailedDescription: `安全AI训练项目。

工作：编写安全测试、漏洞模拟、防护验证、文档编写。

要求：3年安全经验、了解常见漏洞、渗透测试经验。

项目：2个月、每周15-20小时、远程。

薪酬：¥110-¥130/小时。`,
        pay: "¥110-¥130/小时",
        payMin: 110,
        payMax: 130,
        duration: "2 个月",
        durationDays: 60,
        domains: ["工程"],
        skills: ["3年安全经验", "漏洞了解", "渗透测试"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project24"
    },
    {
        id: 25,
        title: "推荐算法标注",
        company: "某推荐系统AI",
        description: "标注用户行为数据优化推荐算法",
        detailedDescription: `推荐系统优化项目。

职责：分析用户行为、标注偏好、评估推荐质量、提供反馈。

要求：数据分析基础、用户理解、逻辑思维。

时间：2-3个月、每周20小时、远程。

薪酬：¥55-¥70/小时。`,
        pay: "¥55-¥70/小时",
        payMin: 55,
        payMax: 70,
        duration: "2-3 个月",
        durationDays: 75,
        domains: ["运营"],
        skills: ["数据分析", "用户理解", "逻辑思维"],
        workMode: "远程",
        applyLink: "https://example.com/apply/project25"
    }
];

// ========================================
// Navigation Logic
// ========================================
const navBtns = document.querySelectorAll('.nav-btn');
const viewSections = document.querySelectorAll('.view-section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        viewSections.forEach(section => section.classList.remove('active'));
        document.getElementById(targetView).classList.add('active');
    });
});

// ========================================
// Project Marketplace Logic with Sorting
// ========================================
let currentProjects = [...projects];

// Render projects
function renderProjects(projectsToRender) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    if (projectsToRender.length === 0) {
        projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 2rem;">没有找到匹配的项目</p>';
        return;
    }

    projectsToRender.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const domainsHTML = project.domains.map(domain =>
            `<span class="domain-tag">${domain}</span>`
        ).join('');

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <div class="meta-item">
                    <span class="meta-label">报酬：</span>
                    <span class="project-pay">${project.pay}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">周期：</span>
                    <span>${project.duration}</span>
                </div>
            </div>
            <div class="project-domains">${domainsHTML}</div>
            <button class="btn-details" data-project-id="${project.id}">查看详情</button>
        `;

        projectsGrid.appendChild(card);
    });

    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = parseInt(btn.getAttribute('data-project-id'));
            openProjectModal(projectId);
        });
    });
}

// Initial render
renderProjects(currentProjects);

// Search, filter, and sort logic
const searchInput = document.getElementById('searchInput');
const domainFilter = document.getElementById('domainFilter');
const sortByPay = document.getElementById('sortByPay');
const sortByDuration = document.getElementById('sortByDuration');

function applyFiltersAndSort() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDomain = domainFilter.value;
    const paySort = sortByPay.value;
    const durationSort = sortByDuration.value;

    let filtered = projects.filter(project => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm) ||
            project.company.toLowerCase().includes(searchTerm) ||
            project.domains.some(d => d.toLowerCase().includes(searchTerm));

        const matchesDomain =
            selectedDomain === '' ||
            project.domains.includes(selectedDomain);

        return matchesSearch && matchesDomain;
    });

    // Sort by pay
    if (paySort === 'high') {
        filtered.sort((a, b) => b.payMax - a.payMax);
    } else if (paySort === 'low') {
        filtered.sort((a, b) => a.payMin - b.payMin);
    }

    // Sort by duration
    if (durationSort === 'short') {
        filtered.sort((a, b) => a.durationDays - b.durationDays);
    } else if (durationSort === 'long') {
        filtered.sort((a, b) => b.durationDays - a.durationDays);
    }

    currentProjects = filtered;
    renderProjects(filtered);
}

searchInput.addEventListener('input', applyFiltersAndSort);
domainFilter.addEventListener('change', applyFiltersAndSort);
sortByPay.addEventListener('change', applyFiltersAndSort);
sortByDuration.addEventListener('change', applyFiltersAndSort);

// ========================================
// Project Detail Modal
// ========================================
const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const domainsHTML = project.domains.map(domain =>
        `<span class="domain-tag">${domain}</span>`
    ).join('');

    const skillsHTML = project.skills.map(skill =>
        `<li>${skill}</li>`
    ).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <p style="color: #64748b; margin-top: 0.5rem;">${project.company}</p>
        </div>

        <div class="modal-section">
            <div class="project-meta" style="margin-bottom: 1rem;">
                <div class="meta-item">
                    <span class="meta-label">报酬：</span>
                    <span class="project-pay">${project.pay}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">预计周期：</span>
                    <span>${project.duration}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">工作形式：</span>
                    <span>${project.workMode}</span>
                </div>
            </div>
            <div class="project-domains">${domainsHTML}</div>
        </div>

        <div class="modal-section">
            <h3>项目详情</h3>
            <p style="white-space: pre-wrap;">${project.detailedDescription}</p>
        </div>

        <div class="modal-section">
            <h3>所需技能</h3>
            <ul>${skillsHTML}</ul>
        </div>

        <button class="btn-apply" onclick="window.open('${project.applyLink}', '_blank')">
            前往申请链接
        </button>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);
document.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ========================================
// Profile Form Logic with Auto-Fill
// ========================================
const saveProfileBtn = document.getElementById('saveProfileBtn');
const successBanner = document.getElementById('successBanner');
const resumeUpload = document.getElementById('resumeUpload');
const uploadedFiles = document.getElementById('uploadedFiles');
const autoFillNotice = document.getElementById('autoFillNotice');
const educationContainer = document.getElementById('educationContainer');
const experienceContainer = document.getElementById('experienceContainer');

// Mock data for auto-fill (simulates resume parsing)
const mockResumeData = {
    name: "张伟",
    email: "zhangwei@email.com",
    phone: "138-0000-8888",
    city: "北京",
    education: [
        {
            school: "清华大学",
            degree: "计算机科学与技术",
            level: "本科",
            gpa: "3.8/4.0",
            startYear: "2015",
            endYear: "2019"
        },
        {
            school: "斯坦福大学",
            degree: "人工智能",
            level: "硕士",
            gpa: "3.9/4.0",
            startYear: "2019",
            endYear: "2021"
        }
    ],
    experience: [
        {
            company: "腾讯科技",
            position: "高级软件工程师",
            location: "深圳",
            startDate: "2021年6月",
            endDate: "2023年8月",
            responsibilities: [
                "负责微信支付后端系统的开发和维护",
                "优化支付流程，提升系统性能30%",
                "带领5人团队完成多个核心功能模块"
            ]
        },
        {
            company: "字节跳动",
            position: "AI工程师",
            location: "北京",
            startDate: "2023年9月",
            endDate: "至今",
            responsibilities: [
                "参与大语言模型训练和优化工作",
                "开发AI数据标注和评估工具",
                "协助改进推荐算法准确率"
            ]
        }
    ]
};

// ========================================
// PDF Parsing Functions
// ========================================

// Extract text from PDF file
async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n';
    }

    return fullText;
}

// Parse contact information
function parseContactInfo(text) {
    const info = {};

    // Extract email
    const emailRegex = /[\w\.-]+@[\w\.-]+\.\w+/gi;
    const emails = text.match(emailRegex);
    info.email = emails ? emails[0] : '';

    // Extract phone (supports multiple formats)
    const phoneRegex = /(?:\+?86)?[-\s]?1[3-9]\d[-\s]?\d{4}[-\s]?\d{4}|(?:\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4})/g;
    const phones = text.match(phoneRegex);
    info.phone = phones ? phones[0].replace(/\s+/g, '-') : '';

    // Extract name (usually first line or near top)
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    // Look for a name-like line (2-4 Chinese characters or 2-4 capitalized words)
    for (let line of lines.slice(0, 5)) {
        const trimmed = line.trim();
        // Chinese name pattern
        if (/^[\u4e00-\u9fa5]{2,4}$/.test(trimmed)) {
            info.name = trimmed;
            break;
        }
        // English name pattern
        if (/^[A-Z][a-z]+(\s[A-Z][a-z]+){1,3}$/.test(trimmed)) {
            info.name = trimmed;
            break;
        }
    }

    // Extract city/location
    const cityRegex = /(?:北京|上海|广州|深圳|杭州|成都|武汉|西安|南京|重庆|天津|苏州|郑州|长沙|东莞|沈阳|青岛|合肥|佛山)/g;
    const cities = text.match(cityRegex);
    info.city = cities ? cities[0] : '';

    return info;
}

// Parse education section
function parseEducation(text) {
    const education = [];

    // Common university names (Chinese and international)
    const universities = [
        '清华大学', '北京大学', '复旦大学', '上海交通大学', '浙江大学', '中国科学技术大学',
        '南京大学', '哈尔滨工业大学', '西安交通大学', '中山大学', '武汉大学', '同济大学',
        '北京航空航天大学', '华中科技大学', '东南大学', '天津大学', '南开大学', '厦门大学',
        'Stanford', 'MIT', 'Harvard', 'Berkeley', 'Cambridge', 'Oxford', 'Princeton',
        'Yale', 'Columbia', 'Cornell', 'Carnegie Mellon', 'University'
    ];

    // Find education section
    const eduSectionRegex = /(?:教育背景|教育经历|EDUCATION|Education)[\s\S]*?(?=工作经历|工作经验|EXPERIENCE|Experience|项目经历|技能|$)/i;
    const eduSection = text.match(eduSectionRegex);
    const eduText = eduSection ? eduSection[0] : text;

    // Extract GPA patterns
    const gpaRegex = /GPA[:\s]*(\d\.\d+(?:\/\d\.\d+)?)/gi;
    const gpas = [];
    let gpaMatch;
    while ((gpaMatch = gpaRegex.exec(eduText)) !== null) {
        gpas.push(gpaMatch[1]);
    }

    // Extract year ranges
    const yearRegex = /(\d{4})\s*[-~至]\s*(\d{4}|至今|Present|现在)/gi;
    const yearRanges = [];
    let yearMatch;
    while ((yearMatch = yearRegex.exec(eduText)) !== null) {
        yearRanges.push({
            start: yearMatch[1],
            end: yearMatch[2].replace(/至今|Present|现在/gi, '至今')
        });
    }

    // Find university mentions
    universities.forEach(uni => {
        const regex = new RegExp(uni, 'gi');
        if (regex.test(eduText)) {
            const entry = {
                school: uni,
                degree: '',
                level: '',
                gpa: '',
                startYear: '',
                endYear: ''
            };

            // Try to find degree level
            const degreeRegex = new RegExp(`${uni}[\\s\\S]{0,100}?(本科|学士|Bachelor|硕士|Master|博士|PhD|Doctor)`, 'i');
            const degreeMatch = eduText.match(degreeRegex);
            if (degreeMatch) {
                const level = degreeMatch[1];
                if (/本科|学士|Bachelor/i.test(level)) entry.level = '本科';
                else if (/硕士|Master/i.test(level)) entry.level = '硕士';
                else if (/博士|PhD|Doctor/i.test(level)) entry.level = '博士';
            }

            // Try to find major/degree
            const majorRegex = new RegExp(`${uni}[\\s\\S]{0,150}?(计算机|软件|电子|通信|人工智能|数据|金融|经济|管理|法律|医学|生物|化学|物理|数学|机械|土木|建筑|Computer|Software|Engineering|Science|Business|Economics|Finance|Law|Medicine)`, 'i');
            const majorMatch = eduText.match(majorRegex);
            if (majorMatch) {
                entry.degree = majorMatch[1];
            }

            // Assign GPA if available
            if (gpas.length > education.length) {
                entry.gpa = gpas[education.length];
            }

            // Assign year range if available
            if (yearRanges.length > education.length) {
                entry.startYear = yearRanges[education.length].start;
                entry.endYear = yearRanges[education.length].end;
            }

            education.push(entry);
        }
    });

    return education;
}

// Parse work experience section
function parseExperience(text) {
    const experience = [];

    // Common company names
    const companies = [
        '腾讯', '阿里巴巴', '字节跳动', '百度', '华为', '小米', '京东', '美团', '滴滴',
        '网易', '拼多多', '快手', '蚂蚁', '微软', 'Google', 'Amazon', 'Facebook', 'Meta',
        'Apple', 'Netflix', 'Tesla', 'Uber', 'Airbnb', 'IBM', 'Oracle', 'Intel',
        'NVIDIA', 'AMD', 'Salesforce', 'Adobe', 'Twitter', 'LinkedIn'
    ];

    // Find work experience section
    const expSectionRegex = /(?:工作经历|工作经验|EXPERIENCE|Experience|Professional Experience)[\s\S]*?(?=教育背景|教育经历|EDUCATION|项目经历|技能|$)/i;
    const expSection = text.match(expSectionRegex);
    const expText = expSection ? expSection[0] : text;

    // Extract year-month ranges for work
    const dateRegex = /(\d{4})[年\-\/\.](\d{1,2})[月]?\s*[-~至]\s*(\d{4}[年\-\/\.]?\d{1,2}[月]?|至今|Present|现在)/gi;
    const dateRanges = [];
    let dateMatch;
    while ((dateMatch = dateRegex.exec(expText)) !== null) {
        const start = `${dateMatch[1]}年${dateMatch[2]}月`;
        let end = dateMatch[3];
        if (/至今|Present|现在/.test(end)) {
            end = '至今';
        } else {
            end = end.replace(/(\d{4})[年\-\/\.]?(\d{1,2})[月]?/, '$1年$2月');
        }
        dateRanges.push({ start, end });
    }

    // Find company mentions
    companies.forEach(company => {
        const regex = new RegExp(company, 'gi');
        if (regex.test(expText)) {
            const entry = {
                company: company,
                position: '',
                location: '',
                startDate: '',
                endDate: '',
                responsibilities: []
            };

            // Try to find position/title near company name
            const positionRegex = new RegExp(`${company}[\\s\\S]{0,100}?(工程师|开发|经理|总监|专家|架构师|主管|分析师|Engineer|Developer|Manager|Director|Analyst|Architect|Lead|Senior|Junior)`, 'i');
            const positionMatch = expText.match(positionRegex);
            if (positionMatch) {
                entry.position = positionMatch[1];
            }

            // Try to find location
            const locationRegex = new RegExp(`${company}[\\s\\S]{0,100}?(北京|上海|广州|深圳|杭州|成都|武汉|西安|南京)`, 'i');
            const locationMatch = expText.match(locationRegex);
            if (locationMatch) {
                entry.location = locationMatch[1];
            }

            // Assign date range if available
            if (dateRanges.length > experience.length) {
                entry.startDate = dateRanges[experience.length].start;
                entry.endDate = dateRanges[experience.length].end;
            }

            // Extract bullet points (responsibilities)
            const bulletRegex = new RegExp(`${company}[\\s\\S]{0,500}`, 'i');
            const companySection = expText.match(bulletRegex);
            if (companySection) {
                const bullets = companySection[0].match(/[•\-\*]\s*(.+)/g);
                if (bullets) {
                    entry.responsibilities = bullets.slice(0, 3).map(b =>
                        b.replace(/^[•\-\*]\s*/, '').trim()
                    );
                }
            }

            // If no bullets found, add placeholder
            if (entry.responsibilities.length === 0) {
                entry.responsibilities = ['负责相关业务开发和维护'];
            }

            experience.push(entry);
        }
    });

    return experience;
}

// Resume upload and auto-fill with actual PDF parsing
resumeUpload.addEventListener('change', async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        const file = files[0];

        // Show uploaded file
        uploadedFiles.innerHTML = `
            <div class="file-item">
                <span class="file-name">📄 ${file.name}</span>
                <span class="file-badge">解析中...</span>
            </div>
        `;

        try {
            // Extract text from PDF
            const text = await extractTextFromPDF(file);
            console.log('Extracted text:', text); // For debugging

            // Parse different sections
            const contactInfo = parseContactInfo(text);
            const education = parseEducation(text);
            const experience = parseExperience(text);

            // Combine parsed data
            const parsedData = {
                name: contactInfo.name || '',
                email: contactInfo.email || '',
                phone: contactInfo.phone || '',
                city: contactInfo.city || '',
                education: education.length > 0 ? education : [],
                experience: experience.length > 0 ? experience : []
            };

            // Update upload status
            uploadedFiles.innerHTML = `
                <div class="file-item">
                    <span class="file-name">📄 ${file.name}</span>
                    <span class="file-badge">已解析</span>
                </div>
            `;

            // Auto-fill the form
            autoFillProfile(parsedData);

            // Show success notice
            autoFillNotice.classList.remove('hidden');
            setTimeout(() => autoFillNotice.classList.add('hidden'), 5000);

            // Store parsed data for later use
            Object.assign(mockResumeData, parsedData);

        } catch (error) {
            console.error('PDF parsing error:', error);
            uploadedFiles.innerHTML = `
                <div class="file-item">
                    <span class="file-name">📄 ${file.name}</span>
                    <span class="file-badge" style="background: #fee; color: #c00;">解析失败</span>
                </div>
            `;
            alert('简历解析失败，请确保上传的是有效的PDF文件');
        }

        resumeUpload.value = '';
    }
});

// Auto-fill profile function
function autoFillProfile(data) {
    // Fill basic info
    document.getElementById('nameInput').value = data.name;
    document.getElementById('emailInput').value = data.email;
    document.getElementById('phoneInput').value = data.phone;
    document.getElementById('cityInput').value = data.city;

    // Fill education
    renderEducation(data.education);

    // Fill work experience
    renderExperience(data.experience);
}

// Render education section
function renderEducation(educationList) {
    educationContainer.innerHTML = '';
    educationList.forEach((edu, index) => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        eduItem.innerHTML = `
            <button class="remove-btn" onclick="removeEducation(${index})">删除</button>
            <h4>${edu.school}</h4>
            <div class="meta"><strong>学位：</strong>${edu.level} - ${edu.degree}</div>
            <div class="meta"><strong>GPA：</strong>${edu.gpa}</div>
            <div class="meta"><strong>时间：</strong>${edu.startYear} - ${edu.endYear}</div>
        `;
        educationContainer.appendChild(eduItem);
    });
}

// Render experience section
function renderExperience(experienceList) {
    experienceContainer.innerHTML = '';
    experienceList.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';

        const responsibilitiesHTML = exp.responsibilities.map(r =>
            `<li>${r}</li>`
        ).join('');

        expItem.innerHTML = `
            <button class="remove-btn" onclick="removeExperience(${index})">删除</button>
            <h4>${exp.position}</h4>
            <div class="meta"><strong>公司：</strong>${exp.company}</div>
            <div class="meta"><strong>地点：</strong>${exp.location}</div>
            <div class="meta"><strong>时间：</strong>${exp.startDate} - ${exp.endDate}</div>
            <ul class="responsibilities">${responsibilitiesHTML}</ul>
        `;
        experienceContainer.appendChild(expItem);
    });
}

// Global functions for removing items
window.removeEducation = (index) => {
    mockResumeData.education.splice(index, 1);
    renderEducation(mockResumeData.education);
};

window.removeExperience = (index) => {
    mockResumeData.experience.splice(index, 1);
    renderExperience(mockResumeData.experience);
};

// Manual add buttons
document.getElementById('addEducationBtn').addEventListener('click', () => {
    const newEdu = {
        school: "学校名称",
        degree: "专业",
        level: "学位",
        gpa: "GPA",
        startYear: "开始年份",
        endYear: "结束年份"
    };
    mockResumeData.education.push(newEdu);
    renderEducation(mockResumeData.education);
});

document.getElementById('addExperienceBtn').addEventListener('click', () => {
    const newExp = {
        company: "公司名称",
        position: "职位",
        location: "地点",
        startDate: "开始时间",
        endDate: "结束时间",
        responsibilities: ["工作职责1", "工作职责2"]
    };
    mockResumeData.experience.push(newExp);
    renderExperience(mockResumeData.experience);
});

// Save profile
saveProfileBtn.addEventListener('click', () => {
    successBanner.classList.remove('hidden');
    setTimeout(() => successBanner.classList.add('hidden'), 3000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    updateProfilePreview();
    console.log('中国人才市场平台已加载 - 25个项目');
});
