// ========================================
// Sample Project Data (Hard-coded)
// ========================================
const projects = [
    {
        id: 1,
        title: "跨境电商风控模型标注",
        company: "阿里巴巴国际",
        description: "为跨境电商平台的风控系统标注训练数据，识别可疑交易模式",
        detailedDescription: "本项目旨在构建一个准确的风控模型，用于识别跨境电商中的欺诈交易。您将参与数据标注工作，分析历史交易数据，标记可疑行为模式。需要深入理解金融风控逻辑和跨境支付流程。",
        pay: "¥5,000/项目",
        duration: "2 个月",
        domains: ["金融", "运营"],
        skills: [
            "熟悉跨境支付和电商业务流程",
            "具备数据标注经验",
            "了解风险控制基本原理",
            "细致认真，有耐心"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project1"
    },
    {
        id: 2,
        title: "医疗器械注册文件审查",
        company: "强生医疗",
        description: "审查医疗器械在中国注册所需的法律文件，确保符合NMPA要求",
        detailedDescription: "作为医疗器械注册专家，您将负责审核和完善医疗器械注册申报材料，确保所有文件符合中国国家药品监督管理局（NMPA）的最新要求。需要精通中英文医疗法规文件。",
        pay: "¥400/小时",
        duration: "3 个月",
        domains: ["医疗", "法律"],
        skills: [
            "熟悉NMPA医疗器械注册法规",
            "医疗或法律背景",
            "优秀的中英文读写能力",
            "注重细节，逻辑严谨"
        ],
        workMode: "混合（每周1天线下）",
        applyLink: "https://example.com/apply/project2"
    },
    {
        id: 3,
        title: "AI训练数据标注项目",
        company: "字节跳动",
        description: "为大语言模型标注高质量的中文训练数据，涵盖多个专业领域",
        detailedDescription: "参与字节跳动下一代AI模型的训练数据标注工作。您将负责审查、修正和标注各类中文文本数据，包括技术文档、对话数据等。需要较强的中文理解能力和逻辑思维。",
        pay: "¥300/小时",
        duration: "持续项目",
        domains: ["工程", "教育"],
        skills: [
            "优秀的中文理解和表达能力",
            "逻辑思维清晰",
            "有技术或教育背景优先",
            "能够长期稳定投入"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project3"
    },
    {
        id: 4,
        title: "企业合规法律咨询",
        company: "德勤咨询",
        description: "为跨国企业提供中国市场的合规法律咨询服务，涵盖数据隐私、劳动法等",
        detailedDescription: "作为合规顾问，您将协助跨国企业理解和遵守中国的法律法规，特别是数据安全法、个人信息保护法以及劳动合同法。需要定期参与客户会议，提供专业法律意见。",
        pay: "¥600/小时",
        duration: "6 个月",
        domains: ["法律"],
        skills: [
            "法律专业背景，有执业资格优先",
            "熟悉中国企业合规法规",
            "优秀的沟通和表达能力",
            "中英文双语能力"
        ],
        workMode: "混合",
        applyLink: "https://example.com/apply/project4"
    },
    {
        id: 5,
        title: "金融衍生品定价模型开发",
        company: "高盛投资",
        description: "开发和优化金融衍生品的定价模型，支持交易决策",
        detailedDescription: "加入量化团队，参与期权、期货等衍生品的定价模型研发。您将使用Python和C++实现复杂的数学模型，并进行回测验证。需要扎实的数学和编程功底。",
        pay: "¥8,000/项目",
        duration: "4 个月",
        domains: ["金融", "工程"],
        skills: [
            "金融工程或数学背景",
            "熟练掌握Python、C++",
            "了解期权定价理论",
            "有量化交易经验优先"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project5"
    },
    {
        id: 6,
        title: "在线教育课程内容开发",
        company: "网易有道",
        description: "设计和开发K12在线课程内容，包括视频脚本、练习题等",
        detailedDescription: "参与网易有道K12在线课程的内容创作。您将负责某一学科的课程设计、教学脚本撰写、习题编写等工作。需要有教学经验和对学生心理的理解。",
        pay: "¥350/小时",
        duration: "3 个月",
        domains: ["教育"],
        skills: [
            "有K12教学经验",
            "熟悉课程设计原理",
            "优秀的内容创作能力",
            "了解在线教育特点"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project6"
    },
    {
        id: 7,
        title: "供应链优化咨询",
        company: "麦肯锡咨询",
        description: "为制造业客户提供供应链优化方案，降低成本提升效率",
        detailedDescription: "作为供应链顾问，您将深入分析客户的供应链流程，识别瓶颈和改进机会，并提出可执行的优化方案。需要具备运营管理知识和数据分析能力。",
        pay: "¥500/小时",
        duration: "5 个月",
        domains: ["运营", "工程"],
        skills: [
            "供应链或运营管理背景",
            "数据分析能力强",
            "熟悉制造业流程",
            "优秀的问题解决能力"
        ],
        workMode: "线下（上海）",
        applyLink: "https://example.com/apply/project7"
    },
    {
        id: 8,
        title: "临床试验数据分析",
        company: "罗氏制药",
        description: "分析临床试验数据，撰写统计分析报告，支持新药审批",
        detailedDescription: "参与新药临床试验的数据分析工作。您将使用统计软件处理和分析临床数据，评估药物的安全性和有效性，并撰写符合监管要求的统计报告。",
        pay: "¥450/小时",
        duration: "4 个月",
        domains: ["医疗"],
        skills: [
            "生物统计或流行病学背景",
            "熟练使用SAS、R等统计软件",
            "了解临床试验流程",
            "严谨细致的工作态度"
        ],
        workMode: "混合",
        applyLink: "https://example.com/apply/project8"
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

        // Update active nav button
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update active view section
        viewSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetView).classList.add('active');
    });
});

// ========================================
// Project Marketplace Logic
// ========================================

// Render all projects
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
                <div class="meta-item">
                    <span class="meta-label">工作形式：</span>
                    <span>${project.workMode}</span>
                </div>
            </div>
            <div class="project-domains">${domainsHTML}</div>
            <button class="btn-details" data-project-id="${project.id}">查看详情</button>
        `;

        projectsGrid.appendChild(card);
    });

    // Attach event listeners to detail buttons
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = parseInt(btn.getAttribute('data-project-id'));
            openProjectModal(projectId);
        });
    });
}

// Initial render
renderProjects(projects);

// Search and filter logic
const searchInput = document.getElementById('searchInput');
const domainFilter = document.getElementById('domainFilter');

function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDomain = domainFilter.value;

    const filtered = projects.filter(project => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm) ||
            project.company.toLowerCase().includes(searchTerm) ||
            project.domains.some(d => d.toLowerCase().includes(searchTerm));

        const matchesDomain =
            selectedDomain === '' ||
            project.domains.includes(selectedDomain);

        return matchesSearch && matchesDomain;
    });

    renderProjects(filtered);
}

searchInput.addEventListener('input', filterProjects);
domainFilter.addEventListener('change', filterProjects);

// ========================================
// Project Detail Modal Logic
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
            <p>${project.detailedDescription}</p>
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

// Close modal when clicking overlay
document.querySelector('.modal-overlay').addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ========================================
// Profile Form Logic
// ========================================
const saveProfileBtn = document.getElementById('saveProfileBtn');
const successBanner = document.getElementById('successBanner');

// Update profile preview in real-time
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const cityInput = document.getElementById('cityInput');
const domainCheckboxes = document.querySelectorAll('.domain-chips input[type="checkbox"]');

function updateProfilePreview() {
    document.getElementById('previewName').textContent = nameInput.value || '未填写';
    document.getElementById('previewEmail').textContent = emailInput.value || '未填写';
    document.getElementById('previewCity').textContent = cityInput.value || '未填写';

    const selectedDomains = Array.from(domainCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    document.getElementById('previewDomains').textContent =
        selectedDomains.length > 0 ? selectedDomains.join(', ') : '未选择';
}

// Attach event listeners
nameInput.addEventListener('input', updateProfilePreview);
emailInput.addEventListener('input', updateProfilePreview);
cityInput.addEventListener('input', updateProfilePreview);
domainCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateProfilePreview);
});

// Save profile button
saveProfileBtn.addEventListener('click', () => {
    // Show success banner
    successBanner.classList.remove('hidden');

    // Hide banner after 3 seconds
    setTimeout(() => {
        successBanner.classList.add('hidden');
    }, 3000);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// File Upload Logic (Fake)
// ========================================
const resumeUpload = document.getElementById('resumeUpload');
const uploadedFiles = document.getElementById('uploadedFiles');

resumeUpload.addEventListener('change', (e) => {
    const files = e.target.files;

    if (files.length > 0) {
        const file = files[0];

        // Create file item element
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <span class="file-name">📄 ${file.name}</span>
            <span class="file-badge">仅示意</span>
        `;

        uploadedFiles.appendChild(fileItem);

        // Reset input so the same file can be selected again
        resumeUpload.value = '';
    }
});

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initial profile preview update
    updateProfilePreview();

    console.log('中国人才市场平台已加载 - Mercor China Prototype');
    console.log('这是一个纯前端演示原型，所有数据都是硬编码的示例数据');
});
